import React from 'react';
import Header from '../../components/Header';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShortenerService from '../../services/shortenerService';
import { StatsContainer } from './styles';


class RedirectPage extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            url: '',
            errorMessage: '',
        }
    }

    async componentDidMount() {
        const {code} = this.props.match.params;
        try {
            const service = new ShortenerService;
            const result = await service.getLink(code);
            window.location = result.url;
        } catch (error) {
            this.setState({ isLoading: false, errorMessage: 'Ops, a URL solicitada não existe.'});
        }
    }
    render() {
        const { url, errorMessage } = this.state;
        return (
            <Container>
            <Header title="PiTu"></Header>
            {errorMessage ? (
                <>
                <StatsContainer>
                    <FontAwesomeIcon size="3x" color="#f8d7da" icon="exclamation-triangle" />
                    <p className="m-3">{errorMessage}</p>
                    <a className="btn btn-primary" href="/">Encurtar nova URL</a>
                </StatsContainer>
                </>
            ) : (
                <>
                <div className="text-center"><p>Redirecionando...</p></div>
                </>
            )
            }
            </Container>
        )
    }
}

export default RedirectPage;