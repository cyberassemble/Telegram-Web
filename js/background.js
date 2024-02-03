/*!
 * Webogram v0.7.0 - messaging web application for MTProto
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */

chrome.app.runtime.onLaunched.addListener(function (launchData) {
  var isWindows = typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.match(/windows/i) ? true : false
  chrome.app.window.create('../index.html', {
    id: 'webogram-chat',
    innerBounds: {
      width: 1000,
      height: 100%
    },
    minWidth: 320,
    minHeight: 100%,
    frame: isWindows ? { color: '#000000' } : 'chrome'
  })
})
