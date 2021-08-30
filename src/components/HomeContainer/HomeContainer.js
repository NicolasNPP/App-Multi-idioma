import Saludo from '../Saludo/Saludo';
import Tarjeta from '../Card/Card';
import { Container, Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next'
import Resultados from '../Resultados/Resultados';
import Banner from '../Banner/Banner';



const HomeContainer = () => {
  const [t, i18n] = useTranslation("global");

  if (window.localStorage.lg === 'es') {

  }
  else {

  }


  return (

    <div>
      <div>
        <Banner></Banner>
        <Saludo />
        <Container>
          <Row>
            <Col xs="4"><Tarjeta tipo={'warning'} titulo={t('cards.ultima-semana')} description={'Enterate las novedades de los ultimos partidos ya.'}></Tarjeta></Col>
            <Col xs="4"><Tarjeta tipo={'danger'} titulo={t('cards.resultados-anteriores')} description={'Resultados de las viejas temporadas de la competencia'}></Tarjeta></Col>
            <Col xs="4"><Tarjeta tipo={'info'} titulo={t('cards.proximas-temporadas')} description={'En un mes abre la inscripcion a la nueva temporada.'}></Tarjeta></Col>
          </Row>

        </Container>
        <Container>
          <Row>
            <Col xs="12"><h2>{t('tabla.resultados')}</h2></Col>

            <Col xs="12"><Resultados></Resultados> </Col>



          </Row>

        </Container>


      </div>
    </div >
  );
}
export default HomeContainer