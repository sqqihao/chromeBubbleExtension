
	class Bubble {
		constructor(_x, _y) {
			this.x = _x;
			this.y = _y;
			this.speedy = common.getBetween(1,4);
			this.w = common.getBetween(2, 16);
			this.smallB = Math.random()>0.7 ? true : false;
		}
		move() {
			this.x += common.getBetween(0,5)-2;
			this.y = this.y-this.speedy;
		}
	}
	class Panel {
		constructor() {
			this.bubbles = new Array();
		}
		create(x, y) {
			if(Math.random()>0.8) {
				this.bubbles.push( new Bubble(x, y) );
			}
		}
		calc() {
			for(var b in this.bubbles) {
				if(this.bubbles[b].y<0) {
					this.bubbles.splice(b,1);
				}else{
					this.bubbles[b].move();
				}
			};
		}
		draw(eCanvas, context) {
			context.clearRect(0,0,eCanvas.width,eCanvas.height);
			for(var b in this.bubbles) {
				// context.fillStyle = ["rgba(255,255,255,0.5)", "rgba(52,152,219,0.5)"][Math.floor(Math.random()*2)];
				context.fillStyle = "rgba(255,255,255,0.5)";
				context.beginPath();
				context.arc(this.bubbles[b].x, this.bubbles[b].y, this.bubbles[b].w, 0, Math.PI*2,false);
				context.fill();
				this.bubbles[b].smallB && this.drawEllipse(context, this.bubbles[b].x, this.bubbles[b].y, this.bubbles[b].w/4, this.bubbles[b].w/3);
			}
		}
		drawEllipse(context, x, y, a, b) {	
		    context.save();
		    var r = (a > b) ? a : b;
		    var ratioX = a / r;
		    var ratioY = b / r;
		    var pos = [a,b,3][common.getBetween(0,2)] + 1;
		    context.fillStyle = "rgba(255,255,255,0.6)";
		    context.scale(ratioX, ratioY);
		    context.beginPath();
		    context.arc(x / ratioX - pos , y / ratioY - pos , r, 0, 2 * Math.PI, false);
		    context.closePath();
		    context.fill();
		    context.restore();
		}
	}
	class BubblePanel {
		constructor() {
			this.createCanvas();
			this.events();
		}
		createCanvas() {
			var eCan = this.eCan = document.createElement("canvas");
			document.body.appendChild(eCan);
			eCan.style.top = "0";
			eCan.style.left = "0";
			eCan.style.position = "fixed";
			eCan.style.zIndex = 100;
			eCan.style.pointerEvents = "none";
			this.context = eCan.getContext("2d");
			this.events();

			this.clientX = 0;
			this.clientY = 0;

			//插件canvas画图面板
			this.panel = new Panel();

			this.requestAni();
		}
		events() {
			var _this = this;
			function resize() {
				_this.eCan.width = document.body.offsetWidth;
				_this.eCan.height = document.body.offsetHeight;
			}
			window.addEventListener('resize', resize);
			resize();

			document.body.addEventListener("mousemove", function(ev) {
				_this.clientX = ev.clientX;
				_this.clientY = ev.clientY;
			});
		}
		//生成泡泡 ＝＝》 计算 ＝＝》》 重新绘图
		requestAni() {
			this.panel.create(this.clientX, this.clientY);
			this.panel.calc();
			this.panel.draw(this.eCan, this.context);
			requestAnimationFrame(this.requestAni.bind(this));

		}
	}
	const common = {
		getBetween : function(start , end) {
			return Math.floor(Math.random()*(end-start))+start;
		}
	}
	new BubblePanel();
