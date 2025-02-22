var APP_DATA = {
  "scenes": [
    {
      "id": "0-pantry",
      "name": "Pantry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.4307148401251606,
        "pitch": 0.05785534371962697,
        "fov": 1.409453910422369
      },
      "linkHotspots": [
        {
          "yaw": 3.107222400087574,
          "pitch": 0.41333660031387076,
          "rotation": 0,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.019115855200080745,
        "pitch": 0,
        "fov": 1.409453910422369
      },
      "linkHotspots": [
        {
          "yaw": 0.47941802148481116,
          "pitch": 0.24996844571890264,
          "rotation": 0,
          "target": "0-pantry"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
