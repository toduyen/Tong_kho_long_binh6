document.addEventListener('DOMContentLoaded',function(){
	let laynut = document.getElementsByClassName('declick');
	let laynoidung = document.getElementsByClassName('dehienthi');
	for (let i = 0; i < laynut.length; i++) {
		laynut[i].onclick = function () {
			if(this.classList[1] == 'mautrang')
			{
				this.classList.toggle('mautrang');
				let layThuocTinh = this.getAttribute('data-hienlen');
				let layId = document.getElementById(layThuocTinh);
				layId.classList.toggle('ra');
			
			}
			else
			{
				for (let i = 0; i < laynut.length; i++) {
					laynut[i].classList.remove('mautrang');
				}
				this.classList.toggle('mautrang');
				// lay noi dung
				let layThuocTinh = this.getAttribute('data-hienlen');
				let layId = document.getElementById(layThuocTinh);
				for (let j = 0; j < laynoidung.length; j++) {
					laynoidung[j].classList.remove('ra');
				}
				layId.classList.toggle('ra');
			}
		
		}
	}
},false)