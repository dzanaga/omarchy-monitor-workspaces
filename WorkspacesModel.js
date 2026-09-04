// Workspace event handling is kept Qt-free so it can be unit tested directly.

function movesWorkspace(event) {
  return Boolean(event) && String(event.name || "") === "moveworkspacev2"
}

if (typeof module !== "undefined") {
  module.exports = {
    movesWorkspace: movesWorkspace
  }
}
