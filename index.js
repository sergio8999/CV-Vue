var app = new Vue({
    el: '#miApp',
    data: {
        datosCV:null,
        es: true
    },
    mounted()
    {
        axios.get("datos.json").then((response) => {
          if(response.data)
            return this.datosCV = response.data;
          else
            return "";
          })
          .catch(()=>{
            console.log("No se ha podido cargar");
          })
    },
    methods: {     
      idiomaEspanol: function(){
        this.es = true;
      },
      idiomaIngles: function(){
        this.es = false;
      }
    },
    computed: {
      datosMenu:function()
      {
        if(this.datosCV === null)
          return "";
        if(this.es) 
          return this.datosCV.es.menu;
        return this.datosCV.en.menu;
      },
      datosSobreMi:function()
      {
        if(this.es)
          return this.datosCV.es.sobreMi;
        return this.datosCV.en.sobreMi;
      },
      datosExperienciaLaboral: function()
      {
        if(this.es)
          return this.datosCV.es.experienciaLaboral;
        return this.datosCV.en.experienciaLaboral;
      },
      datosEducacion:function()
      {
        if(this.es)
          return this.datosCV.es.educacion;
        return this.datosCV.en.educacion;
      },
      datosHabilidades: function()
      {
        if(this.es)
          return this.datosCV.es.habilidades; 
        return this.datosCV.en.habilidades;
      },
      datosProyectos: function()
      {
        if(this.es)
          return this.datosCV.es.proyectos;
        return this.datosCV.en.proyectos;
      },
      datosIdiomas: function()
      {
        if(this.es)
          return this.datosCV.es.idiomas;
        return this.datosCV.en.idiomas;
      },
      datosReferencias: function()
      {
        if(this.es)
          return this.datosCV.es.referencias;
        return this.datosCV.en.referencias;
      },
      datosContacto: function()
      {
        if(this.es)
          return this.datosCV.es.contacto;
        return this.datosCV.en.contacto;
      },
      datosModal:function()
      {
        if(this.es)
          return this.datosCV.es.modales;
        return this.datosCV.en.modales;
      },
      datosRedesSociales: function()
      {
        return this.datosCV.redesSociales;
      }
    }
  })