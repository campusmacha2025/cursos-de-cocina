function appData(){
  return {
    lang:'es',
    translations:{
      es:{ heroTitle:'Aprendé a cocinar como un chef profesional', heroDesc:'Cursos de cocina online, 35 niveles, carrito, PayPal.', btnView:'Ver cursos', btnSubscribe:'Inscribite ya', coursesTitle:'Nuestros Cursos', btnIngredients:'Ingredientes', btnAddCart:'Añadir', cart:'Carrito', total:'Total:', btnCheckout:'Pagar', promoTitle:'Promociones', promoDesc:'3 cursos por €100', btnAddCombo:'Agregar Combo', authTitle:'Ingresar / Registrarse', btnRegister:'Registrarse', btnLogin:'Ingresar', btnClose:'Cerrar' },
      en:{ heroTitle:'Learn to cook like a professional chef', heroDesc:'35 cooking courses online, cart, PayPal.', btnView:'View Courses', btnSubscribe:'Enroll Now', coursesTitle:'Our Courses', btnIngredients:'Ingredients', btnAddCart:'Add to Cart', cart:'Cart', total:'Total:', btnCheckout:'Checkout', promoTitle:'Special Offers', promoDesc:'3 courses for €100', btnAddCombo:'Add Combo', authTitle:'Login / Register', btnRegister:'Register', btnLogin:'Login', btnClose:'Close' }
    },
    user: JSON.parse(localStorage.getItem('user'))||null,
    showAuth:false, authEmail:'',
    t(k){return this.translations[this.lang][k]},
    openAuth(){this.showAuth=true},
    login(){this.user={email:this.authEmail,purchased:[],progress:{}},localStorage.setItem('user',JSON.stringify(this.user)),this.showAuth=false},
    register(){this.login()},
    logout(){localStorage.removeItem('user');this.user=null},
    cursos:Array.from({length:35},(_,i)=>({id:i+1,title:`Curso ${i+1}`,desc:'Descripción breve',duration:Math.floor(Math.random()*5)+1,price:Math.floor(Math.random()*30)+30,img:`assets/curso${(i%5)+1}.jpg`,ingredients:['Ingrediente A','Ingrediente B','Ingrediente C'],level:i<12?'Básico':i<24?'Intermedio':'Avanzado'})),
    cart:[], category:'all', modalCurso:null,
    get filteredCursos(){return this.category==='all'?this.cursos:this.cursos.filter(c=>c.level===this.category)},
    filterLevel(l){this.category=l},
    catCls(l){return 'px-4 py-2 mr-2 '+(this.category===l?'bg-orange-500 text-white':'border border-gray-300 rounded')},
    get total(){return this.cart.reduce((a,b)=>a+b.price,0).toFixed(2)},
    addToCart(c){if(!this.cart.find(i=>i.id===c.id))this.cart.push(c)},
    removeFromCart(c){this.cart=this.cart.filter(i=>i.id!==c.id)},
    showIngredients(c){this.modalCurso=c},
    addCombo(){this.cursos.slice(0,3).forEach(c=>this.addToCart(c))},
    checkout(){if(this.user){this.cart.forEach(c=>{this.user.purchased.push(c.id);this.user.progress[c.id]=0});localStorage.setItem('user',JSON.stringify(this.user));alert('Compra exitosa');}else alert('Inicia sesión primero.')},
    checkoutPayPal(){alert('Redirigiendo a PayPal...')}
  }
}
