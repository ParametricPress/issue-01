'use strict';

module.exports = {
    name: 'swupMergeHeadPlugin',
    options: { runScripts: false },
    exec: function exec(options, swup, getHTMLfromCache) {

        console.log('adding event listener');
        document.addEventListener('swup:willReplaceContent', function () {
            console.log('on content replaced');
            var currentHead = document.querySelector('head');
            var newHead = getHTMLfromCache().querySelector('head');
            replaceHeadWithoutReplacingExistingTags(currentHead, newHead);
        });

        var replaceHeadWithoutReplacingExistingTags = function replaceHeadWithoutReplacingExistingTags(currentHead, newHead) {
            console.log('replacing head scripts');
            var oldTags = currentHead.children;
            var newTags = newHead.children;
            var oldTagsToRemove = [];
            var newTagsToRemove = [];

            console.log('newHead', newHead);

            for (var i = 0; i < oldTags.length; i++) {
                var oldTag = oldTags[i];
                var oldTagIdentifier = oldTag.outerHTML;
                var foundInNewHead = false;
                var newTag = void 0;
                for (var j = 0; j < newTags.length; j++) {
                    newTag = newTags[j];
                    var newTagIdentifier = newTag.outerHTML;

                    if (newTagIdentifier === oldTagIdentifier) {
                        foundInNewHead = true;
                        break;
                    }
                }

                if (foundInNewHead) {
                    console.log('not inserting ', newTag);
                    newTagsToRemove.push(newTag);
                } else {
                    console.log('old tag to remove ', oldTag);
                    oldTagsToRemove.push(oldTag);
                }
            }

            for (var _i = 0; _i < newTagsToRemove.length; _i++) {
                newHead.removeChild(newTagsToRemove[_i]);
            }

            for (var _i2 = 0; _i2 < oldTagsToRemove.length; _i2++) {
                currentHead.removeChild(oldTagsToRemove[_i2]);
            }

            var added = newHead.children.length;
            var removed = oldTagsToRemove.length;
            console.log('added', added);
            console.log(newHead.children);

            var fragment = document.createDocumentFragment();
            for (var _i3 = 0; _i3 < newHead.children.length; _i3++) {
                console.log('adding', newHead.children[_i3]);
                fragment.appendChild(newHead.children[_i3].cloneNode(true));
                // fragment.appendChild(newHead.children[_i3]);
            }
            // console.log(fragment);
            currentHead.appendChild(fragment);

            if (options.runScripts) {
                newHead.querySelectorAll('script').forEach(function (item) {
                    if (item.tagName == "SCRIPT" && (item.type == null || item.type == "" || item.type == "text/javascript")) {
                        var elem = document.createElement('script');
                        if (item.src != null && item.src != "") {
                            elem.src = item.src;
                        } else {
                            var inline = document.createTextNode(item.innerText);
                            elem.appendChild(inline);
                        }
                        if (item.type != null && item.type != "") {
                            elem.type = item.type;
                        }
                        currentHead.appendChild(elem);
                    } else {}
                });
            }

            console.log('Removed ' + removed + ' / added ' + added + ' tags in head');
            swup.log('Removed ' + removed + ' / added ' + added + ' tags in head');
        };
    }
};