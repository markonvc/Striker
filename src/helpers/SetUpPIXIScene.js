import * as PIXI from 'pixi.js'


    let renderer = PIXI.autoDetectRenderer({
        transparent: true,
    });
    
    let stage = new PIXI.Container();

    let ball = PIXI.Sprite.from('https://get-plop.s3.eu-west-1.amazonaws.com/plop/test/widgetNoVariants/assets/ball.jpg');

    const render = () => { 
        requestAnimationFrame(render);  
        console.log("ffff");
        ball.rotation += 0.01;
        
        renderer.render(stage);

      }

    export const  renderBall = (canvas) => {
        console.log(canvas);
    
        let canvasElement = document.getElementById(canvas)
        canvasElement.appendChild(renderer.view);
        console.log(canvasElement);
        
        ball.scale._x = 1.1;
        ball.scale._y = 1.1;
        ball.anchor.x = 0.5;
        ball.anchor.y = 0.5;
        ball.x = renderer.width / 2;
        ball.y = renderer.height / 2;

        stage.addChild(ball);

        render();

    }

