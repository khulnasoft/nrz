/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/start-gui.ts > TAP > formatDashboardJson dashboardProjectLocations > should return the expected dashboard project locations 1`] = `
Array [
  Object {
    "path": "{CWD}/.tap/fixtures/test-start-gui.ts-formatDashboardJson-dashboardProjectLocations",
    "readablePath": "~",
  },
  Object {
    "path": "{CWD}/.tap/fixtures/test-start-gui.ts-formatDashboardJson-dashboardProjectLocations/projects",
    "readablePath": "~/projects",
  },
  Object {
    "path": "{CWD}/.tap/fixtures/test-start-gui.ts-formatDashboardJson-dashboardProjectLocations/drafts/more",
    "readablePath": "~/drafts/more",
  },
  Object {
    "path": "{CWD}/.tap/fixtures/test-start-gui.ts-formatDashboardJson-dashboardProjectLocations/drafts/recent",
    "readablePath": "~/drafts/recent",
  },
  Object {
    "path": "{CWD}/.tap/fixtures/test-start-gui.ts-formatDashboardJson-dashboardProjectLocations/drafts/previous",
    "readablePath": "~/drafts/previous",
  },
  Object {
    "path": "{CWD}/.tap/fixtures/test-start-gui.ts-formatDashboardJson-dashboardProjectLocations/drafts/more/util/extra",
    "readablePath": "~/drafts/more/util/extra",
  },
]
`

exports[`test/start-gui.ts > TAP > parseInstallArgs > multiple item added to root and workspace 1`] = `
Object {
  "add": AddImportersDependenciesMapImpl {
    "file·." => Map {
      "abbrev" => Object {
        "spec": Spec {
          "bareSpec": "latest",
          "conventionalRegistryTarball": undefined,
          "distTag": "latest",
          "file": undefined,
          "gitCommittish": undefined,
          "gitRemote": undefined,
          "gitSelector": undefined,
          "gitSelectorParsed": undefined,
          "name": "abbrev",
          "namedGitHost": undefined,
          "namedGitHostPath": undefined,
          "namedRegistry": undefined,
          "options": Object {
            "git-host-archives": Object {
              "bitbucket": "https://bitbucket.org/$1/$2/get/$committish.tar.gz",
              "gist": "https://codeload.github.com/gist/$1/tar.gz/$committish",
              "github": "https://codeload.github.com/$1/$2/tar.gz/$committish",
              "gitlab": "https://gitlab.com/$1/$2/repository/archive.tar.gz?ref=$committish",
            },
            "git-hosts": Object {
              "bitbucket": "git+ssh://git@bitbucket.org:$1/$2.git",
              "gist": "git+ssh://git@gist.github.com/$1.git",
              "github": "git+ssh://git@github.com:$1/$2.git",
              "gitlab": "git+ssh://git@gitlab.com:$1/$2.git",
            },
            "registries": Object {
              "npm": "https://registry.npmjs.org/",
            },
            "registry": "https://registry.npmjs.org/",
            "scope-registries": Object {},
          },
          "range": undefined,
          "registry": "https://registry.npmjs.org/",
          "registrySpec": "latest",
          "remoteURL": undefined,
          "scope": undefined,
          "scopeRegistry": undefined,
          "semver": undefined,
          "spec": "abbrev@latest",
          "subspec": undefined,
          "type": "registry",
          "workspace": undefined,
          "workspaceSpec": undefined,
        },
        "type": "dev",
      },
    },
    "workspace·packages§a" => Map {
      "english-days" => Object {
        "spec": Spec {
          "bareSpec": "latest",
          "conventionalRegistryTarball": undefined,
          "distTag": "latest",
          "file": undefined,
          "gitCommittish": undefined,
          "gitRemote": undefined,
          "gitSelector": undefined,
          "gitSelectorParsed": undefined,
          "name": "english-days",
          "namedGitHost": undefined,
          "namedGitHostPath": undefined,
          "namedRegistry": undefined,
          "options": Object {
            "git-host-archives": Object {
              "bitbucket": "https://bitbucket.org/$1/$2/get/$committish.tar.gz",
              "gist": "https://codeload.github.com/gist/$1/tar.gz/$committish",
              "github": "https://codeload.github.com/$1/$2/tar.gz/$committish",
              "gitlab": "https://gitlab.com/$1/$2/repository/archive.tar.gz?ref=$committish",
            },
            "git-hosts": Object {
              "bitbucket": "git+ssh://git@bitbucket.org:$1/$2.git",
              "gist": "git+ssh://git@gist.github.com/$1.git",
              "github": "git+ssh://git@github.com:$1/$2.git",
              "gitlab": "git+ssh://git@gitlab.com:$1/$2.git",
            },
            "registries": Object {
              "npm": "https://registry.npmjs.org/",
            },
            "registry": "https://registry.npmjs.org/",
            "scope-registries": Object {},
          },
          "range": undefined,
          "registry": "https://registry.npmjs.org/",
          "registrySpec": "latest",
          "remoteURL": undefined,
          "scope": undefined,
          "scopeRegistry": undefined,
          "semver": undefined,
          "spec": "english-days@latest",
          "subspec": undefined,
          "type": "registry",
          "workspace": undefined,
          "workspaceSpec": undefined,
        },
        "type": "prod",
      },
      "simple-output" => Object {
        "spec": Spec {
          "bareSpec": "latest",
          "conventionalRegistryTarball": undefined,
          "distTag": "latest",
          "file": undefined,
          "gitCommittish": undefined,
          "gitRemote": undefined,
          "gitSelector": undefined,
          "gitSelectorParsed": undefined,
          "name": "simple-output",
          "namedGitHost": undefined,
          "namedGitHostPath": undefined,
          "namedRegistry": undefined,
          "options": Object {
            "git-host-archives": Object {
              "bitbucket": "https://bitbucket.org/$1/$2/get/$committish.tar.gz",
              "gist": "https://codeload.github.com/gist/$1/tar.gz/$committish",
              "github": "https://codeload.github.com/$1/$2/tar.gz/$committish",
              "gitlab": "https://gitlab.com/$1/$2/repository/archive.tar.gz?ref=$committish",
            },
            "git-hosts": Object {
              "bitbucket": "git+ssh://git@bitbucket.org:$1/$2.git",
              "gist": "git+ssh://git@gist.github.com/$1.git",
              "github": "git+ssh://git@github.com:$1/$2.git",
              "gitlab": "git+ssh://git@gitlab.com:$1/$2.git",
            },
            "registries": Object {
              "npm": "https://registry.npmjs.org/",
            },
            "registry": "https://registry.npmjs.org/",
            "scope-registries": Object {},
          },
          "range": undefined,
          "registry": "https://registry.npmjs.org/",
          "registrySpec": "latest",
          "remoteURL": undefined,
          "scope": undefined,
          "scopeRegistry": undefined,
          "semver": undefined,
          "spec": "simple-output@latest",
          "subspec": undefined,
          "type": "registry",
          "workspace": undefined,
          "workspaceSpec": undefined,
        },
        "type": "prod",
      },
    },
  },
  "conf": Object {},
}
`

exports[`test/start-gui.ts > TAP > parseInstallArgs > no item added to root 1`] = `
Object {
  "add": AddImportersDependenciesMapImpl {
    "file·." => Map {},
  },
  "conf": Object {},
}
`

exports[`test/start-gui.ts > TAP > parseInstallArgs > single item added to root 1`] = `
Object {
  "add": AddImportersDependenciesMapImpl {
    "file·." => Map {
      "abbrev" => Object {
        "spec": Spec {
          "bareSpec": "latest",
          "conventionalRegistryTarball": undefined,
          "distTag": "latest",
          "file": undefined,
          "gitCommittish": undefined,
          "gitRemote": undefined,
          "gitSelector": undefined,
          "gitSelectorParsed": undefined,
          "name": "abbrev",
          "namedGitHost": undefined,
          "namedGitHostPath": undefined,
          "namedRegistry": undefined,
          "options": Object {
            "git-host-archives": Object {
              "bitbucket": "https://bitbucket.org/$1/$2/get/$committish.tar.gz",
              "gist": "https://codeload.github.com/gist/$1/tar.gz/$committish",
              "github": "https://codeload.github.com/$1/$2/tar.gz/$committish",
              "gitlab": "https://gitlab.com/$1/$2/repository/archive.tar.gz?ref=$committish",
            },
            "git-hosts": Object {
              "bitbucket": "git+ssh://git@bitbucket.org:$1/$2.git",
              "gist": "git+ssh://git@gist.github.com/$1.git",
              "github": "git+ssh://git@github.com:$1/$2.git",
              "gitlab": "git+ssh://git@gitlab.com:$1/$2.git",
            },
            "registries": Object {
              "npm": "https://registry.npmjs.org/",
            },
            "registry": "https://registry.npmjs.org/",
            "scope-registries": Object {},
          },
          "range": undefined,
          "registry": "https://registry.npmjs.org/",
          "registrySpec": "latest",
          "remoteURL": undefined,
          "scope": undefined,
          "scopeRegistry": undefined,
          "semver": undefined,
          "spec": "abbrev@latest",
          "subspec": undefined,
          "type": "registry",
          "workspace": undefined,
          "workspaceSpec": undefined,
        },
        "type": "dev",
      },
    },
  },
  "conf": Object {},
}
`

exports[`test/start-gui.ts > TAP > parseInstallArgs > single item added to workspace 1`] = `
Object {
  "add": AddImportersDependenciesMapImpl {
    "workspace·packages§a" => Map {
      "abbrev" => Object {
        "spec": Spec {
          "bareSpec": "latest",
          "conventionalRegistryTarball": undefined,
          "distTag": "latest",
          "file": undefined,
          "gitCommittish": undefined,
          "gitRemote": undefined,
          "gitSelector": undefined,
          "gitSelectorParsed": undefined,
          "name": "abbrev",
          "namedGitHost": undefined,
          "namedGitHostPath": undefined,
          "namedRegistry": undefined,
          "options": Object {
            "git-host-archives": Object {
              "bitbucket": "https://bitbucket.org/$1/$2/get/$committish.tar.gz",
              "gist": "https://codeload.github.com/gist/$1/tar.gz/$committish",
              "github": "https://codeload.github.com/$1/$2/tar.gz/$committish",
              "gitlab": "https://gitlab.com/$1/$2/repository/archive.tar.gz?ref=$committish",
            },
            "git-hosts": Object {
              "bitbucket": "git+ssh://git@bitbucket.org:$1/$2.git",
              "gist": "git+ssh://git@gist.github.com/$1.git",
              "github": "git+ssh://git@github.com:$1/$2.git",
              "gitlab": "git+ssh://git@gitlab.com:$1/$2.git",
            },
            "registries": Object {
              "npm": "https://registry.npmjs.org/",
            },
            "registry": "https://registry.npmjs.org/",
            "scope-registries": Object {},
          },
          "range": undefined,
          "registry": "https://registry.npmjs.org/",
          "registrySpec": "latest",
          "remoteURL": undefined,
          "scope": undefined,
          "scopeRegistry": undefined,
          "semver": undefined,
          "spec": "abbrev@latest",
          "subspec": undefined,
          "type": "registry",
          "workspace": undefined,
          "workspaceSpec": undefined,
        },
        "type": "optional",
      },
    },
  },
  "conf": Object {},
}
`
