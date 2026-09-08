// Edit method labels here; keep their keys unchanged.
// Each set contains four rows. Fill empty strings with relative video/image paths.
// Empty paths render reserved slots without requesting nonexistent files.
const comparisonData = {
  "methods": [
    {
      "key": "method_1",
      "label": "Method 1"
    },
    {
      "key": "method_2",
      "label": "Method 2"
    },
    {
      "key": "method_3",
      "label": "Method 3"
    },
    {
      "key": "method_4",
      "label": "Method 4"
    },
    {
      "key": "method_5",
      "label": "Method 5"
    },
    {
      "key": "ours",
      "label": "Ours"
    }
  ],
  "sections": [
    {
      "id": "test-comparisons",
      "inputImage": false,
      "sets": [
        [
          {
            "label": "Human 036 | a human is performing jump rope in place",
            "input_mesh": "assets/videos/comparisonA/input_mesh/Human_4c989f8d4d0b9c1e6e096f21719fd09d.mp4",
            "method_1": "assets/videos/comparisonA/01_Human_036__a010/Animate3D.mp4",
            "method_2": "assets/videos/comparisonA/01_Human_036__a010/AnimateAnyMesh.mp4",
            "method_3": "assets/videos/comparisonA/01_Human_036__a010/TapMo.mp4",
            "method_4": "assets/videos/comparisonA/01_Human_036__a010/BiMotion.mp4",
            "method_5": "assets/videos/comparisonA/01_Human_036__a010/ActionMesh.mp4",
            "ours": "assets/videos/comparisonA/01_Human_036__a010/SpectralWeave.mp4"
          },
          {
            "label": "Human 048 | a human is performing bruce lee style jump kick",
            "input_mesh": "assets/videos/comparisonA/input_mesh/Human_4c989f8d4d0b9c1e6e096f21719fd09d.mp4",
            "method_1": "assets/videos/comparisonA/02_Human_048__a022/Animate3D.mp4",
            "method_2": "assets/videos/comparisonA/02_Human_048__a022/AnimateAnyMesh.mp4",
            "method_3": "assets/videos/comparisonA/02_Human_048__a022/TapMo.mp4",
            "method_4": "assets/videos/comparisonA/02_Human_048__a022/BiMotion.mp4",
            "method_5": "assets/videos/comparisonA/02_Human_048__a022/ActionMesh.mp4",
            "ours": "assets/videos/comparisonA/02_Human_048__a022/SpectralWeave.mp4"
          },
          {
            "label": "DT4D 038 | an animal performing drink",
            "input_mesh": "assets/videos/comparisonA/input_mesh/DT4D_cattleAFK.mp4",
            "method_1": "assets/videos/comparisonA/03_DT4D_038__a071/Animate3D.mp4",
            "method_2": "assets/videos/comparisonA/03_DT4D_038__a071/AnimateAnyMesh.mp4",
            "method_3": "assets/videos/comparisonA/03_DT4D_038__a071/TapMo.mp4",
            "method_4": "assets/videos/comparisonA/03_DT4D_038__a071/BiMotion.mp4",
            "method_5": "assets/videos/comparisonA/03_DT4D_038__a071/ActionMesh.mp4",
            "ours": "assets/videos/comparisonA/03_DT4D_038__a071/SpectralWeave.mp4"
          },
          {
            "label": "Human 111 | a human is performing jump rope in place",
            "input_mesh": "assets/videos/comparisonA/input_mesh/Human_b6e2f4dbb404550f7c05e5158c45f979.mp4",
            "method_1": "assets/videos/comparisonA/04_Human_111__a010/Animate3D.mp4",
            "method_2": "assets/videos/comparisonA/04_Human_111__a010/AnimateAnyMesh.mp4",
            "method_3": "assets/videos/comparisonA/04_Human_111__a010/TapMo.mp4",
            "method_4": "assets/videos/comparisonA/04_Human_111__a010/BiMotion.mp4",
            "method_5": "assets/videos/comparisonA/04_Human_111__a010/ActionMesh.mp4",
            "ours": "assets/videos/comparisonA/04_Human_111__a010/SpectralWeave.mp4"
          }
        ],
        [
          {
            "label": "DT4D 195 | an animal performing trotleft",
            "input_mesh": "assets/videos/comparisonA/input_mesh/DT4D_moose1DOG.mp4",
            "method_1": "assets/videos/comparisonA/05_DT4D_195__a223/Animate3D.mp4",
            "method_2": "assets/videos/comparisonA/05_DT4D_195__a223/AnimateAnyMesh.mp4",
            "method_3": "assets/videos/comparisonA/05_DT4D_195__a223/TapMo.mp4",
            "method_4": "assets/videos/comparisonA/05_DT4D_195__a223/BiMotion.mp4",
            "method_5": "assets/videos/comparisonA/05_DT4D_195__a223/ActionMesh.mp4",
            "ours": "assets/videos/comparisonA/05_DT4D_195__a223/SpectralWeave.mp4"
          },
          {
            "label": "DT4D 154 | an animal performing attack 3",
            "input_mesh": "assets/videos/comparisonA/input_mesh/DT4D_moose1DOG.mp4",
            "method_1": "assets/videos/comparisonA/06_DT4D_154__a017/Animate3D.mp4",
            "method_2": "assets/videos/comparisonA/06_DT4D_154__a017/AnimateAnyMesh.mp4",
            "method_3": "assets/videos/comparisonA/06_DT4D_154__a017/TapMo.mp4",
            "method_4": "assets/videos/comparisonA/06_DT4D_154__a017/BiMotion.mp4",
            "method_5": "assets/videos/comparisonA/06_DT4D_154__a017/ActionMesh.mp4",
            "ours": "assets/videos/comparisonA/06_DT4D_154__a017/SpectralWeave.mp4"
          },
          {
            "label": "DT4D 077 | an animal performing swim idle",
            "input_mesh": "assets/videos/comparisonA/input_mesh/DT4D_deerOMG.mp4",
            "method_1": "assets/videos/comparisonA/07_DT4D_077__a206/Animate3D.mp4",
            "method_2": "assets/videos/comparisonA/07_DT4D_077__a206/AnimateAnyMesh.mp4",
            "method_3": "assets/videos/comparisonA/07_DT4D_077__a206/TapMo.mp4",
            "method_4": "assets/videos/comparisonA/07_DT4D_077__a206/BiMotion.mp4",
            "method_5": "assets/videos/comparisonA/07_DT4D_077__a206/ActionMesh.mp4",
            "ours": "assets/videos/comparisonA/07_DT4D_077__a206/SpectralWeave.mp4"
          },
          {
            "label": "Human 136 | a human is performing jump rope in place",
            "input_mesh": "assets/videos/comparisonA/input_mesh/Human_e4280b007901ef1c87a68be75323ab39.mp4",
            "method_1": "assets/videos/comparisonA/08_Human_136__a010/Animate3D.mp4",
            "method_2": "assets/videos/comparisonA/08_Human_136__a010/AnimateAnyMesh.mp4",
            "method_3": "assets/videos/comparisonA/08_Human_136__a010/TapMo.mp4",
            "method_4": "assets/videos/comparisonA/08_Human_136__a010/BiMotion.mp4",
            "method_5": "assets/videos/comparisonA/08_Human_136__a010/ActionMesh.mp4",
            "ours": "assets/videos/comparisonA/08_Human_136__a010/SpectralWeave.mp4"
          }
        ]
      ],
      "methods": [
        {
          "key": "method_1",
          "label": "Animate3D"
        },
        {
          "key": "method_2",
          "label": "AnimateAnyMesh"
        },
        {
          "key": "method_3",
          "label": "TapMo"
        },
        {
          "key": "method_4",
          "label": "BiMotion"
        },
        {
          "key": "method_5",
          "label": "ActionMesh"
        },
        {
          "key": "ours",
          "label": "SpectralWeave (Ours)"
        }
      ]
    },
    {
      "id": "image-to-3d-comparisons",
      "inputImage": true,
      "sets": [
        [
          {
            "label": "Example 01",
            "input_image": "",
            "input_mesh": "",
            "method_1": "",
            "method_2": "",
            "method_3": "",
            "method_4": "",
            "method_5": "",
            "ours": ""
          },
          {
            "label": "Example 02",
            "input_image": "",
            "input_mesh": "",
            "method_1": "",
            "method_2": "",
            "method_3": "",
            "method_4": "",
            "method_5": "",
            "ours": ""
          },
          {
            "label": "Example 03",
            "input_image": "",
            "input_mesh": "",
            "method_1": "",
            "method_2": "",
            "method_3": "",
            "method_4": "",
            "method_5": "",
            "ours": ""
          },
          {
            "label": "Example 04",
            "input_image": "",
            "input_mesh": "",
            "method_1": "",
            "method_2": "",
            "method_3": "",
            "method_4": "",
            "method_5": "",
            "ours": ""
          }
        ],
        [
          {
            "label": "Example 01",
            "input_image": "",
            "input_mesh": "",
            "method_1": "",
            "method_2": "",
            "method_3": "",
            "method_4": "",
            "method_5": "",
            "ours": ""
          },
          {
            "label": "Example 02",
            "input_image": "",
            "input_mesh": "",
            "method_1": "",
            "method_2": "",
            "method_3": "",
            "method_4": "",
            "method_5": "",
            "ours": ""
          },
          {
            "label": "Example 03",
            "input_image": "",
            "input_mesh": "",
            "method_1": "",
            "method_2": "",
            "method_3": "",
            "method_4": "",
            "method_5": "",
            "ours": ""
          },
          {
            "label": "Example 04",
            "input_image": "",
            "input_mesh": "",
            "method_1": "",
            "method_2": "",
            "method_3": "",
            "method_4": "",
            "method_5": "",
            "ours": ""
          }
        ],
        [
          {
            "label": "Example 01",
            "input_image": "",
            "input_mesh": "",
            "method_1": "",
            "method_2": "",
            "method_3": "",
            "method_4": "",
            "method_5": "",
            "ours": ""
          },
          {
            "label": "Example 02",
            "input_image": "",
            "input_mesh": "",
            "method_1": "",
            "method_2": "",
            "method_3": "",
            "method_4": "",
            "method_5": "",
            "ours": ""
          },
          {
            "label": "Example 03",
            "input_image": "",
            "input_mesh": "",
            "method_1": "",
            "method_2": "",
            "method_3": "",
            "method_4": "",
            "method_5": "",
            "ours": ""
          },
          {
            "label": "Example 04",
            "input_image": "",
            "input_mesh": "",
            "method_1": "",
            "method_2": "",
            "method_3": "",
            "method_4": "",
            "method_5": "",
            "ours": ""
          }
        ]
      ]
    }
  ]
};
