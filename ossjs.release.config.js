module.exports = {
  script:
    "vsce publish --no-git-tag-version --no-update-package-json $RELEASE_VERSION",
}
