import { Link } from "react-router-dom";
import "./Actividades.css";
export function Actividades() {
  return (
    <>
      <div className="container-fluid">
        <div class="row mt-5  mx-5 ">
          <div class="col-12 col-md-6 columnacontainer mt-5 ">
            <h1>Nuestros servicios</h1>
            <h6 class="mt-5">Ecologíco</h6>
            <div class="progress ">
              <div
                class="progress-bar bg-dark columna4"
                role="progressbar"
                aria-label="Example with label"
              >
                25%
              </div>
            </div>
            <h6 class="mt-3">Ubicación</h6>
            <div class="progress">
              <div class="progress-bar bg-dark colunma3" role="progressbar">
                50%
              </div>
            </div>
            <h6 class="mt-3">Wiffi</h6>
            <div class="progress">
              <div class="progress-bar bg-dark columna2" role="progressbar">
                75%
              </div>
            </div>
            <h6 class="mt-3">Comida y relajación</h6>
            <div class="progress ">
              <div class="progress-bar bg-dark columna" role="progressbar">
                100%
              </div>
            </div>

            <div class="row mt-5">
              <h1 className="text-center">Las Mejores Aguas termales</h1>
              <h4 className="text-center">Ven y disfruta!!!!</h4>
              <div class="col">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/frontreact-d2038.appspot.com/o/6.jpg?alt=media&token=48c0fd89-590b-4143-a035-1e7bf69ab2d2"
                  className="img-fluid"
                ></img>
              </div>
              <div class="col">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/frontreact-d2038.appspot.com/o/aguas%20termales.jpg?alt=media&token=21b75cfd-04f7-4ca8-808e-592f78b0956c"
                  className="img-fluid h-100"
                ></img>
              </div>
            </div>

            <Link className="nav-link active" aria-current="page" to="Contact"><button
              type="button"
              class="btn btn-info btn btn-outline-dark w-75 ms-5 mt-5 md-5"              
            >
              Contáctanos y disfruta!!!
            </button></Link>
          
          </div>

          <div class="col-12 col-md-6 ">
            <h1 class="col-12 col-md-6 align-center">Nuestro Hotel</h1>
            <p class="p">
              El Hotel japonés Keima, se encuentra ubicado en un entorno natural
              inmejorable, en el municipio de Lladurs, en el norte del Solsonès.
              Es una masía del s.XII rehabilitada combinando la estructura
              histórica de la masía, con el diseño y ambientación minimalista y
              elegante de estilo japonés. El hotel es un oasis de calma y relax,
              donde poder desconectar del ruido en el que vivimos inmersos y
              conectar con las estaciones, un lugar en el que dejarse cuidar y
              disfrutar de una experiencia diferente. Todas disponen de baño
              propio con bañera o ducha, whaslet (wc con bidé electrónico
              incorporado) secador de pelo, calefacción y aire acondicionado,
              TV, hervidor de agua con tés, conexión wifi y vistas al exterior.
              Podrás probar los yukatas (traje tradicional japonés de algodón) y
              zouris (sandalia japonesa) para utilizar durante la estancia en el
              hotel..
            </p>

            <div class="container text-center">
              <div class="row">
                <div class="col">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/frontreact-d2038.appspot.com/o/6.jpg?alt=media&token=48c0fd89-590b-4143-a035-1e7bf69ab2d2"
                    className="img-fluid"></img>
                </div>
                <div class="col">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/frontreact-d2038.appspot.com/o/hbt2.jpg?alt=media&token=5f5ccb68-fa29-45fa-90fa-3e53e5df90c3"
                    className="img-fluid h-100"></img>
                </div>
                <div class="col">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/frontreact-d2038.appspot.com/o/5.jpg?alt=media&token=35f6da63-6b70-498f-ba48-4788ead94446"
                    className="img-fluid h-100"></img>
                </div>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col">
                <img
                  src="https://www.altonivel.com.mx/wp-content/uploads/2021/07/Comida-japonesa-.jpg"
                  className="img-fluid"></img>
              </div>
              <div class="col">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/frontreact-d2038.appspot.com/o/HotelAnime.jpg?alt=media&token=310e1821-021c-4353-a1c7-7c3e926c24db"
                  className="img-fluid h-100"></img>
              </div>
              <div class="col">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/frontreact-d2038.appspot.com/o/hotelreservas.jpg?alt=media&token=04559c51-73ed-4e58-88f4-c9bca090c631"
                  className="img-fluid h-100"></img>
              </div>
            </div>
            <div class="row mt-5 ">
              <div class="col">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/frontreact-d2038.appspot.com/o/2.jpg?alt=media&token=27059b6d-9695-4c86-aa57-893386b9f7f3"
                  className="img-fluid"></img>
              </div>
              <div class="col">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/frontreact-d2038.appspot.com/o/3.jpg?alt=media&token=4131d51c-bf9b-49be-ae9b-9489f517ef9c"
                  className="img-fluid h-100"></img>
              </div>
              <div class="col ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/frontreact-d2038.appspot.com/o/hotelAguas.jpg?alt=media&token=8dcf6b80-d5ed-4d36-9f46-d8d0782f4abf"
                  className="img-fluid h-100"></img>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5 ">
          <div class="col">
            <div class="card  h-100">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/frontreact-d2038.appspot.com/o/naruto-hotel-1%20(1).jpg?alt=media&token=dc13e194-402f-4a9b-8844-b3b706715002"
                class="card-img-top h-100"/>
              <div class="card-body">
                <h5 class="card-title">Animados</h5>
                <p class="card-text">
                  Las mejores habitaciones Animadas con tu anime favorito.
                </p>
                <a href="#" class="btn btn-info btn btn-outline-dark">
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card  h-100">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/frontreact-d2038.appspot.com/o/hbt2.jpg?alt=media&token=5f5ccb68-fa29-45fa-90fa-3e53e5df90c3"
                class="card-img-top"  className="img-fluid h-100"/>
              <div class="card-body">
                <h5 class="card-title">Habitaciones</h5>
                <p class="card-text">
                 Habitaciones para tu relajación y comodidad.
                </p>
                <a href="#" class="btn btn-info btn btn-outline-dark">
                Contáctanos
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/frontreact-d2038.appspot.com/o/spa.jpg?alt=media&token=299cd1fc-6229-443a-bacc-5c4b67efc413"
                class="card-img-top"  className="img-fluid h-100"/>
              <div class="card-body">
                <h5 class="card-title">Spa</h5>
                <p class="card-text">
                 Con la comodidad y relajación de la naturaleza.</p>
                <a href="#" class="btn btn-info btn btn-outline-dark">
                Contáctanos</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
