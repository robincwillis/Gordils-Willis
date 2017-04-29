export default function init(proX,proY,moireSizeX,moireSizeY) {

      var px = document.getElementById('px');
      var py = document.getElementById('py');
      var mX = document.getElementById('mx');
      var mX = document.getElementById('my');

      onchange = function(){
        init(px.value,py.value,mx.value,my.value);
        stage.removeChild(container);
        stage.removeChild(container2);
      }


      // Stageの作成
      var stage = new createjs.Stage("canvas");
      // コンテナー(グループの親)を作成
      var container = new createjs.Container();
      container.x = stage.canvas.width/2;
      container.y = stage.canvas.height/2;
      stage.addChild(container); // 画面に追加

      var container2 = new createjs.Container();
      container2.x = stage.canvas.width/2;
      container2.y = stage.canvas.height/2;
      stage.addChild(container2); // 画面に追加

        var rad = 360;//線の数
        // var moireSizeX = 5;
        var size = stage.canvas.height > stage.canvas.width ? stage.canvas.height : stage.canvas.width; //230

      // ループ分で10回
      for (var i = 0; i < 360; i++) {
        // 円を作成し
        var moire = new createjs.Shape();
        var moire2 = new createjs.Shape();
        var cirX = size*Math.cos(i*360/rad*Math.PI/180);
        var cirY = size*Math.sin(i*360/rad*Math.PI/180);
        var lastX = moireSizeX*Math.cos(i*360/rad*Math.PI/180*proX);
        var lastY = moireSizeY*Math.sin(i*360/rad*Math.PI/180*proY);

        var color1 = "#fff";
        var color2 = "#fff";

        moire.graphics
                .beginStroke(color1)
                .setStrokeStyle(1)
                .moveTo(cirX, cirY)
                .lineTo(lastX, lastY);

        moire.x = stage.canvas.width;
        moire.y = stage.canvas.height;
        moire.regX = stage.canvas.width;
        moire.regY = stage.canvas.height;

        moire2.graphics
                .beginStroke(color2)
                .setStrokeStyle(1)
                .moveTo(cirX, cirY)
                .lineTo(lastX, lastY);

        moire2.x = stage.canvas.width;
        moire2.y = stage.canvas.height;
        moire2.regX = stage.canvas.width;
        moire2.regY = stage.canvas.height;
        // グループに追加
        container.addChild(moire);
        container2.addChild(moire2);
      }
      createjs.Ticker.addEventListener("tick", handleTick);
      function handleTick() {
        container.rotation += 1;
        container2.rotation -= 1;
        stage.update();
      }

    }