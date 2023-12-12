let faq = document.getElementsByClassName("faq-el");

for(i=0; i<=faq.length; i++) {
    faq[i].onclick = function(event) {
        console.log('Fan');
        this.classList.toggle("faq-el-show");
    }
}

