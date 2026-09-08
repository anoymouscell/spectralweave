// Image-to-3D: all six methods re-rendered with shared row scale/camera on white.
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
      "showActionText": true,
      "inputImage": false,
      "sets": [
        [
          {
            "label": "Human 036 | a human is performing jump rope in place",
            "action_text": "a human is performing jump rope in place",
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
            "action_text": "a human is performing bruce lee style jump kick",
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
            "action_text": "an animal performing drink",
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
            "action_text": "a human is performing jump rope in place",
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
            "action_text": "an animal performing trotleft",
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
            "action_text": "an animal performing attack 3",
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
            "action_text": "an animal performing swim idle",
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
            "action_text": "a human is performing jump rope in place",
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
      "showActionText": true,
      "inputImage": true,
      "sets": [
        [
          {
            "label": "001 | 孙悟空 | a human is performing kick up spin and run",
            "action_text": "a human is performing kick up spin and run",
            "input_image": "assets/videos/comparisonB_selected12/001/input.png",
            "input_mesh": "assets/videos/comparisonB_selected12/001/input_mesh.mp4",
            "method_1": "assets/videos/comparisonB_selected12/001/Animate3D_unified_white_v6.mp4",
            "method_2": "assets/videos/comparisonB_selected12/001/AnimateAnyMesh_unified_white_v6.mp4",
            "method_3": "assets/videos/comparisonB_selected12/001/TapMo_unified_white_v6.mp4",
            "method_4": "assets/videos/comparisonB_selected12/001/BiMotion_unified_white_v6.mp4",
            "method_5": "assets/videos/comparisonB_selected12/001/ActionMesh_unified_white_v6.mp4",
            "ours": "assets/videos/comparisonB_selected12/001/Ours_unified_white_v6.mp4"
          },
          {
            "label": "005 | 黑狗 | a human is performing one foot kick ball",
            "action_text": "a human is performing one foot kick ball",
            "input_image": "assets/videos/comparisonB_selected12/005/input.png",
            "input_mesh": "assets/videos/comparisonB_selected12/005/input_mesh.mp4",
            "method_1": "assets/videos/comparisonB_selected12/005/Animate3D_unified_white_v6.mp4",
            "method_2": "assets/videos/comparisonB_selected12/005/AnimateAnyMesh_unified_white_v6.mp4",
            "method_3": "assets/videos/comparisonB_selected12/005/TapMo_unified_white_v6.mp4",
            "method_4": "assets/videos/comparisonB_selected12/005/BiMotion_unified_white_v6.mp4",
            "method_5": "assets/videos/comparisonB_selected12/005/ActionMesh_unified_white_v6.mp4",
            "ours": "assets/videos/comparisonB_selected12/005/Ours_unified_white_v6.mp4"
          },
          {
            "label": "010 | animal 新批次06 | an animal performing walkforward",
            "action_text": "an animal performing walkforward",
            "input_image": "assets/videos/comparisonB_selected12/010/input.png",
            "input_mesh": "assets/videos/comparisonB_selected12/010/input_mesh.mp4",
            "method_1": "assets/videos/comparisonB_selected12/010/Animate3D_unified_white_v6.mp4",
            "method_2": "assets/videos/comparisonB_selected12/010/AnimateAnyMesh_unified_white_v6.mp4",
            "method_3": "assets/videos/comparisonB_selected12/010/TapMo_unified_white_v6.mp4",
            "method_4": "assets/videos/comparisonB_selected12/010/BiMotion_unified_white_v6.mp4",
            "method_5": "assets/videos/comparisonB_selected12/010/ActionMesh_unified_white_v6.mp4",
            "ours": "assets/videos/comparisonB_selected12/010/Ours_unified_white_v6.mp4"
          },
          {
            "label": "011 | cat_12 | an animal performing trotright",
            "action_text": "an animal performing trotright",
            "input_image": "assets/videos/comparisonB_selected12/011/input.png",
            "input_mesh": "assets/videos/comparisonB_selected12/011/input_mesh.mp4",
            "method_1": "assets/videos/comparisonB_selected12/011/Animate3D_unified_white_v6.mp4",
            "method_2": "assets/videos/comparisonB_selected12/011/AnimateAnyMesh_unified_white_v6.mp4",
            "method_3": "assets/videos/comparisonB_selected12/011/TapMo_unified_white_v6.mp4",
            "method_4": "assets/videos/comparisonB_selected12/011/BiMotion_unified_white_v6.mp4",
            "method_5": "assets/videos/comparisonB_selected12/011/ActionMesh_unified_white_v6.mp4",
            "ours": "assets/videos/comparisonB_selected12/011/Ours_unified_white_v6.mp4"
          }
        ],
        [
          {
            "label": "002 | 大象 | a human is performing bent knee walk forward upper body sway",
            "action_text": "a human is performing bent knee walk forward upper body sway",
            "input_image": "assets/videos/comparisonB_selected12/002/input.png",
            "input_mesh": "assets/videos/comparisonB_selected12/002/input_mesh.mp4",
            "method_1": "assets/videos/comparisonB_selected12/002/Animate3D_unified_white_v6.mp4",
            "method_2": "assets/videos/comparisonB_selected12/002/AnimateAnyMesh_unified_white_v6.mp4",
            "method_3": "assets/videos/comparisonB_selected12/002/TapMo_unified_white_v6.mp4",
            "method_4": "assets/videos/comparisonB_selected12/002/BiMotion_unified_white_v6.mp4",
            "method_5": "assets/videos/comparisonB_selected12/002/ActionMesh_unified_white_v6.mp4",
            "ours": "assets/videos/comparisonB_selected12/002/Ours_unified_white_v6.mp4"
          },
          {
            "label": "004 | 兔子 | a human is performing jump once step back gun pose",
            "action_text": "a human is performing jump once step back gun pose",
            "input_image": "assets/videos/comparisonB_selected12/004/input.png",
            "input_mesh": "assets/videos/comparisonB_selected12/004/input_mesh.mp4",
            "method_1": "assets/videos/comparisonB_selected12/004/Animate3D_unified_white_v6.mp4",
            "method_2": "assets/videos/comparisonB_selected12/004/AnimateAnyMesh_unified_white_v6.mp4",
            "method_3": "assets/videos/comparisonB_selected12/004/TapMo_unified_white_v6.mp4",
            "method_4": "assets/videos/comparisonB_selected12/004/BiMotion_unified_white_v6.mp4",
            "method_5": "assets/videos/comparisonB_selected12/004/ActionMesh_unified_white_v6.mp4",
            "ours": "assets/videos/comparisonB_selected12/004/Ours_unified_white_v6.mp4"
          },
          {
            "label": "007 | 紫色 knight | a human is performing spin back sweep kick",
            "action_text": "a human is performing spin back sweep kick",
            "input_image": "assets/videos/comparisonB_selected12/007/input.png",
            "input_mesh": "assets/videos/comparisonB_selected12/007/input_mesh.mp4",
            "method_1": "assets/videos/comparisonB_selected12/007/Animate3D_unified_white_v6.mp4",
            "method_2": "assets/videos/comparisonB_selected12/007/AnimateAnyMesh_unified_white_v6.mp4",
            "method_3": "assets/videos/comparisonB_selected12/007/TapMo_unified_white_v6.mp4",
            "method_4": "assets/videos/comparisonB_selected12/007/BiMotion_unified_white_v6.mp4",
            "method_5": "assets/videos/comparisonB_selected12/007/ActionMesh_unified_white_v6.mp4",
            "ours": "assets/videos/comparisonB_selected12/007/Ours_unified_white_v6.mp4"
          },
          {
            "label": "012 | animal 新批次05 | an animal performing run forward",
            "action_text": "an animal performing run forward",
            "input_image": "assets/videos/comparisonB_selected12/012/input.png",
            "input_mesh": "assets/videos/comparisonB_selected12/012/input_mesh.mp4",
            "method_1": "assets/videos/comparisonB_selected12/012/Animate3D_unified_white_v6.mp4",
            "method_2": "assets/videos/comparisonB_selected12/012/AnimateAnyMesh_unified_white_v6.mp4",
            "method_3": "assets/videos/comparisonB_selected12/012/TapMo_unified_white_v6.mp4",
            "method_4": "assets/videos/comparisonB_selected12/012/BiMotion_unified_white_v6.mp4",
            "method_5": "assets/videos/comparisonB_selected12/012/ActionMesh_unified_white_v6.mp4",
            "ours": "assets/videos/comparisonB_selected12/012/Ours_unified_white_v6.mp4"
          }
        ],
        [
          {
            "label": "003 | robot | a human is performing jump rope in place",
            "action_text": "a human is performing jump rope in place",
            "input_image": "assets/videos/comparisonB_selected12/003/input.png",
            "input_mesh": "assets/videos/comparisonB_selected12/003/input_mesh.mp4",
            "method_1": "assets/videos/comparisonB_selected12/003/Animate3D_unified_white_v6.mp4",
            "method_2": "assets/videos/comparisonB_selected12/003/AnimateAnyMesh_unified_white_v6.mp4",
            "method_3": "assets/videos/comparisonB_selected12/003/TapMo_unified_white_v6.mp4",
            "method_4": "assets/videos/comparisonB_selected12/003/BiMotion_unified_white_v6.mp4",
            "method_5": "assets/videos/comparisonB_selected12/003/ActionMesh_unified_white_v6.mp4",
            "ours": "assets/videos/comparisonB_selected12/003/Ours_unified_white_v6.mp4"
          },
          {
            "label": "006 | 浣熊 | a human is performing same arm leg swing dance step forward back",
            "action_text": "a human is performing same arm leg swing dance step forward back",
            "input_image": "assets/videos/comparisonB_selected12/006/input.png",
            "input_mesh": "assets/videos/comparisonB_selected12/006/input_mesh.mp4",
            "method_1": "assets/videos/comparisonB_selected12/006/Animate3D_unified_white_v6.mp4",
            "method_2": "assets/videos/comparisonB_selected12/006/AnimateAnyMesh_unified_white_v6.mp4",
            "method_3": "assets/videos/comparisonB_selected12/006/TapMo_unified_white_v6.mp4",
            "method_4": "assets/videos/comparisonB_selected12/006/BiMotion_unified_white_v6.mp4",
            "method_5": "assets/videos/comparisonB_selected12/006/ActionMesh_unified_white_v6.mp4",
            "ours": "assets/videos/comparisonB_selected12/006/Ours_unified_white_v6.mp4"
          },
          {
            "label": "008 | 中式衣服女生 | a human is performing drop to crouch hands on floor slide back",
            "action_text": "a human is performing drop to crouch hands on floor slide back",
            "input_image": "assets/videos/comparisonB_selected12/008/input.png",
            "input_mesh": "assets/videos/comparisonB_selected12/008/input_mesh.mp4",
            "method_1": "assets/videos/comparisonB_selected12/008/Animate3D_unified_white_v6.mp4",
            "method_2": "assets/videos/comparisonB_selected12/008/AnimateAnyMesh_unified_white_v6.mp4",
            "method_3": "assets/videos/comparisonB_selected12/008/TapMo_unified_white_v6.mp4",
            "method_4": "assets/videos/comparisonB_selected12/008/BiMotion_unified_white_v6.mp4",
            "method_5": "assets/videos/comparisonB_selected12/008/ActionMesh_unified_white_v6.mp4",
            "ours": "assets/videos/comparisonB_selected12/008/Ours_unified_white_v6.mp4"
          },
          {
            "label": "009 | raccoon_4 | an animal performing drink",
            "action_text": "an animal performing drink",
            "input_image": "assets/videos/comparisonB_selected12/009/input.png",
            "input_mesh": "assets/videos/comparisonB_selected12/009/input_mesh.mp4",
            "method_1": "assets/videos/comparisonB_selected12/009/Animate3D_unified_white_v6.mp4",
            "method_2": "assets/videos/comparisonB_selected12/009/AnimateAnyMesh_unified_white_v6.mp4",
            "method_3": "assets/videos/comparisonB_selected12/009/TapMo_unified_white_v6.mp4",
            "method_4": "assets/videos/comparisonB_selected12/009/BiMotion_unified_white_v6.mp4",
            "method_5": "assets/videos/comparisonB_selected12/009/ActionMesh_unified_white_v6.mp4",
            "ours": "assets/videos/comparisonB_selected12/009/Ours_unified_white_v6.mp4"
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
    }
  ]
};
