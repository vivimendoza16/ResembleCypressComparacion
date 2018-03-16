describe('Los estudiantes login', function() {
    it('Visits los estudiantes and success login', function() {
      cy.visit('https://losestudiantes.co')
      cy.screenshot('screen11prueba1')
      cy.contains('Cerrar').click()
    //Lineas nuevas
      cy.contains('Ingresar').click()
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Carolina")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Mendez")
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type("caromen@hotmail.com")
      cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select("Universidad de los Andes")
      cy.get('.cajaSignUp').find('[type="checkbox"]').check()
      cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("Maestría en Ingeniería de Software")
      cy.get('.cajaSignUp').find('input[name="password"]').click().type("123456789")
      cy.get('.cajaSignUp').contains('Registrarse').click()
      cy.contains('Ok').click()
      cy.wait(4000)
      cy.screenshot('screen21prueba1')
    })
})

describe('Los estudiantes login cuenta existente', function() {
    it('Visits los estudiantes and login with existent account', function() {
      cy.visit('https://losestudiantes.co')
      cy.screenshot('screen11prueba2')
      cy.contains('Cerrar').click()
      //Lineas nuevas
      cy.contains('Ingresar').click()
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Carolina")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Mendez")
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type("caromen@hotmail.com")
      cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select("Universidad de los Andes")
      cy.get('.cajaSignUp').find('[type="checkbox"]').check()
      cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("Maestría en Ingeniería de Software")
      cy.get('.cajaSignUp').find('input[name="password"]').click().type("123456789")
      cy.get('.cajaSignUp').contains('Registrarse').click()
      cy.contains('Ok').click()
      cy.wait(4000)
      cy.screenshot('screen21prueba2')
    })
})

/*describe('Los estudiantes visitar pagina profesor', function() {
    it('Visits los estudiantes and look for a teacher', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
    //  Lineas nuevas
      cy.get('.Select-input').click({force: true}).find('input').type('mario linares',{force: true})

    })
})*/


/*describe('Los estudiantes visitar pagina profesor 2', function() {
   it('Visits los estudiantes and look for a teacher2', function() {
      cy.visit('https://losestudiantes.co')
      cy.screenshot('screen1prueba3')
      cy.contains('Cerrar').click()
      cy.get('.splash').find('select[id="sample_select"]').select("Diseño")
      cy.contains('Alfabético').click()
      //cy.get('.profesor').click('a')
      cy.wait(2000)
      cy.get('.profesor').contains('Fernando Sierra Rodriguez').click()
      cy.screenshot('screen2prueba3')
    })
  })*/

  describe('Los estudiantes visitar pagina profesor pagina Materia', function() {
      it('Visits los estudiantes and look for a teacher', function() {
        cy.visit('https://losestudiantes.co')
        cy.screenshot('screen11prueba3')
        cy.contains('Cerrar').click()
        cy.get('.opcion_maestria_click').click()
        cy.get('.splash').find('select').select("Maestría en Ingeniería de Software")
        cy.get('.profesor').contains('Mario Linares Vasquez').click()
        cy.wait(4000)
        cy.get('.labelHover').contains('Estructuras De Datos').click()
        cy.wait(4000)
        cy.screenshot('screen21prueba3')
     })
  })
