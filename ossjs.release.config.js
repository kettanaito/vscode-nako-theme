module.exports = {
  script:
    "vsce publish -p $VSCE_TOKEN --no-git-tag-version --no-update-package-json $RELEASE_VERSION",
}
