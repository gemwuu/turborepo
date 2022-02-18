window.BENCHMARK_DATA = {
  "lastUpdate": 1645144121041,
  "repoUrl": "https://github.com/vercel/turborepo",
  "entries": {
    "Linux Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greg.soltis@vercel.com",
            "name": "Greg Soltis",
            "username": "gsoltis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d42fa555ad2a6dc5b1c33fb8ee1bb6c4ae9299d",
          "message": "Large Monorepo Benchmark (#740)\n\nRuns a set of benchmarks against a large monorepo example. \n\nBenchmarks include:\n * A clean, zero-state build* of the monorepo\n * Building the unchanged monorepo with a full cache\n * Building the monorepo with a source code edit on top of a previously-built cache\n * Building the monorepo with a dependency graph edit on top of a previously-build cache\n\n*: Note that we only do this once, and with `concurrency` set to `1`. A full concurrent build currently OOMs",
          "timestamp": "2022-02-15T22:29:29Z",
          "tree_id": "339dab36b2fdf6d11d1e9c4d4681e9ab5d927612",
          "url": "https://github.com/vercel/turborepo/commit/4d42fa555ad2a6dc5b1c33fb8ee1bb6c4ae9299d"
        },
        "date": 1644965502570,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Clean Build",
            "value": 154258,
            "unit": "ms",
            "range": "0"
          },
          {
            "name": "Cached Build - no changes",
            "value": 10261.6,
            "unit": "ms",
            "range": "408"
          },
          {
            "name": "Cached Build - source code change",
            "value": 35279.6,
            "unit": "ms",
            "range": "10198"
          },
          {
            "name": "Cached Build - dependency change",
            "value": 35709.4,
            "unit": "ms",
            "range": "7464"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "3476570+ivoilic@users.noreply.github.com",
            "name": "Ivo Ilić",
            "username": "ivoilic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eccacc9dc0f239b278a204ba1344fe9077015114",
          "message": "Don't run build & test on changes to the docs (#737)\n\nCo-authored-by: Jared Palmer <jared@jaredpalmer.com>",
          "timestamp": "2022-02-16T10:57:20-05:00",
          "tree_id": "cfec4cb244bd97f0ae6a1a1fb09a125c0a89d356",
          "url": "https://github.com/vercel/turborepo/commit/eccacc9dc0f239b278a204ba1344fe9077015114"
        },
        "date": 1645028529133,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Clean Build",
            "value": 170578.4,
            "unit": "ms",
            "range": "0"
          },
          {
            "name": "Cached Build - no changes",
            "value": 10771.4,
            "unit": "ms",
            "range": "512"
          },
          {
            "name": "Cached Build - source code change",
            "value": 39879.6,
            "unit": "ms",
            "range": "11987"
          },
          {
            "name": "Cached Build - dependency change",
            "value": 39542.4,
            "unit": "ms",
            "range": "9163"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jared@jaredpalmer.com",
            "name": "Jared Palmer",
            "username": "jaredpalmer"
          },
          "committer": {
            "email": "jared@jaredpalmer.com",
            "name": "Jared Palmer",
            "username": "jaredpalmer"
          },
          "distinct": true,
          "id": "dca8f9fb4d916d48724fb6d3f85380bd3cf0b664",
          "message": "Update showcase",
          "timestamp": "2022-02-16T11:47:33-05:00",
          "tree_id": "d39610e8996a6fc3a1930735d9f90a85493d2106",
          "url": "https://github.com/vercel/turborepo/commit/dca8f9fb4d916d48724fb6d3f85380bd3cf0b664"
        },
        "date": 1645031501574,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Clean Build",
            "value": 166916.2,
            "unit": "ms",
            "range": "0"
          },
          {
            "name": "Cached Build - no changes",
            "value": 10755,
            "unit": "ms",
            "range": "511"
          },
          {
            "name": "Cached Build - source code change",
            "value": 40386.2,
            "unit": "ms",
            "range": "9729"
          },
          {
            "name": "Cached Build - dependency change",
            "value": 40143.8,
            "unit": "ms",
            "range": "9206"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jared@jaredpalmer.com",
            "name": "Jared Palmer",
            "username": "jaredpalmer"
          },
          "committer": {
            "email": "jared@jaredpalmer.com",
            "name": "Jared Palmer",
            "username": "jaredpalmer"
          },
          "distinct": true,
          "id": "1251457dddaf977a45ed56fffc1b35feee2f7b41",
          "message": "Fix alt tag",
          "timestamp": "2022-02-16T11:47:53-05:00",
          "tree_id": "5c5dd46c1d70b401124cfd824c800e921ca2ebfa",
          "url": "https://github.com/vercel/turborepo/commit/1251457dddaf977a45ed56fffc1b35feee2f7b41"
        },
        "date": 1645031687944,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Clean Build",
            "value": 191019.6,
            "unit": "ms",
            "range": "0"
          },
          {
            "name": "Cached Build - no changes",
            "value": 11162.4,
            "unit": "ms",
            "range": "307"
          },
          {
            "name": "Cached Build - source code change",
            "value": 44686.4,
            "unit": "ms",
            "range": "12393"
          },
          {
            "name": "Cached Build - dependency change",
            "value": 43798.6,
            "unit": "ms",
            "range": "12407"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Greg Soltis",
            "username": "gsoltis",
            "email": "greg.soltis@vercel.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "09223bf43e4f3668bfd4f9b8a9599c836fbd6692",
          "message": "Start splitting the Run command up (#752)\n\nThis PR makes a few changes to `Run`. The intention is to separate out a few distinct pieces:\n * The complete graph, inferred from the the filesystem and pipeline configuration. This should be reusable across multiple runs on the same filesystem / pipeline\n * Run specific configuration: what tasks to run, whether to include dependencies, etc.\n * The mechanics of how to execute the run. In parallel? Cache the output? etc.\n\nReview note: it may be easier to go commit by commit.",
          "timestamp": "2022-02-17T17:34:44Z",
          "url": "https://github.com/vercel/turborepo/commit/09223bf43e4f3668bfd4f9b8a9599c836fbd6692"
        },
        "date": 1645144119611,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Clean Build",
            "value": 120823,
            "unit": "ms",
            "range": "0"
          },
          {
            "name": "Cached Build - no changes",
            "value": 9962.6,
            "unit": "ms",
            "range": "460"
          },
          {
            "name": "Cached Build - source code change",
            "value": 30461.6,
            "unit": "ms",
            "range": "8714"
          },
          {
            "name": "Cached Build - dependency change",
            "value": 33389.6,
            "unit": "ms",
            "range": "8642"
          }
        ]
      }
    ]
  }
}