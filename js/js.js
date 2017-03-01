
	var imgBase64 = "data:image/png;base64,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"
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


		/**
		* 鱼的类
		*/
		class Fish {
			constructor() {
				//小鱼的地址
				this.src= imgBase64;
				//小鱼的宽度和高度
				this.imageW = 40;
				this.imageH = 40;
				//小鱼目前的位置
				this.nowX = 0;
				this.nowY = 0;
				//小鱼要到的地方
				this.destX = 0;
				this.destY = 0;
				this.init();
			}
			init() {
				this.img = new Image();
				this.img.src = this.src;
			}
		}

		/**
		* 创建canvas， 并插入到DOM中
		*/
		class Can {
			constructor(el) {
				var eCan = document.createElement("canvas");
				el.appendChild(eCan);
				eCan.style.top = "0";
				eCan.style.left = "0";
				eCan.style.position = "fixed";
				eCan.style.zIndex = 100;
				eCan.style.pointerEvents = "none";
				return eCan;
			}
		}

		/**
		* 整体逻辑
		*/
		class Fly {
			constructor(bd, window, fish, can) {
				this.body = bd;
				this.win = window;
				this.fish = fish;
				this.can = can;
				this.context = this.can.getContext("2d");
				this.events();
				this.requestAni();
			}
			//绑定window的事件
			events() {
				var _this = this;
				function move(ev) {
					_this.fish.destX = ev.clientX;
					_this.fish.destY = ev.clientY;
				}
				function resize() {
					_this.can.width = _this.body.offsetWidth;
					_this.can.height = _this.body.offsetHeight;
				}
				this.win.addEventListener("mousemove", move);
				this.win.addEventListener('resize', resize);

				resize();
			}
			/**
			* return position X, Y;
			*/
			lerp(a, b, n) {
				return (1 - n) * a + n * b;
			}
			//重复刷新， 更新canvas画图
			requestAni() {
				var _this = this;
				//计算🐟游到的位置
				this.fish.nowX = this.lerp( this.fish.nowX, this.fish.destX,.1);
				this.fish.nowY = this.lerp( this.fish.nowY, this.fish.destY-this.fish.imageH/2,.1);
				//更新到画布
				this.context.clearRect(0, 0 ,this.can.width, this.can.height);
				this.context.save();
				if(this.fish.destX<this.fish.nowX) {
					this.context.drawImage(this.fish.img, this.fish.nowX , this.fish.nowY , this.fish.imageW,  this.fish.imageW);
				}else{
					this.context.scale(-1, 1);
					this.context.drawImage(this.fish.img, -this.fish.nowX  , this.fish.nowY , this.fish.imageW,  _this.fish.imageW);
				}
				this.context.restore();
				window.requestAnimationFrame(function() {
					_this.requestAni();
				});
			}
		}



		var fish = new Fish();

		var can = new Can(document.body);

		var fly = new Fly(document.body, window, fish, can);

		new BubblePanel();
