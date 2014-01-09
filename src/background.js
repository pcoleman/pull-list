chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('../content/window.html', {
    'bounds': {
      'width': 400,
      'height': 500
    }
  });
});
