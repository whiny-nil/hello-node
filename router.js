function route(handle, pathname) {
  console.log("About to route to " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname];
  } else {
    console.log("I have no idea what to do");
  }
}

exports.route = route
