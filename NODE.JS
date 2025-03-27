var nodegit = require('nodegit'),
    path = require('path');

var url = "https://github.com/atomicptr/dauntless-builder", //also tried https://github.com/atomicptr/dauntless-builder.git
    local = "C:/data",
    cloneOpts = {};

nodegit.Clone(url, local, cloneOpts).then(function (repo) {
    console.log("cloning succesful!");
    console.log("Cloned " + path.basename(url) + " to " + repo.workdir());
}).catch(function (err) {
    console.log(err);
});
