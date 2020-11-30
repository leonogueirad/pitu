import React from 'react';
import Header from '../../components/Header';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StatsContainer } from './styles';


class NotFoundPage extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Container>
                <Header title="PiTu">Erro 404</Header>
                    <StatsContainer>
                        <FontAwesomeIcon size="3x" color="#f8d7da" icon="exclamation-triangle" />
                        <p className="m-3"><h1>{'404'}</h1></p>
                        <p className="m-1">{'Página não encontrada'}</p>
                        <a className="btn btn-primary m-5" href="/">Encurtar nova URL</a>
                    </StatsContainer>
            </Container>
        )
    }
}

export default NotFoundPage;