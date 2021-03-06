import React from 'react';
import Header from '../../components/Header';
import { Container } from 'react-bootstrap';
import ShortenerService from '../../services/shortenerService';
import { parseISO, formatRelative } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StatsContainer, StatsBox, StatsRow, StatsBoxTitle } from './styles';
import {siteURL} from '../../config';


class StatsPage extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            shortenedURL: {},
            errorMessage: '',
        }
    }

    async componentDidMount() {
        const code = this.props.match.params.code;
        try {
            const service = new ShortenerService;
            const shortenedURL = await service.getStats(code);
            const parsedDate = parseISO(shortenedURL.updatedAt);
            const currentDate = new Date();
            const relativeDate = formatRelative(parsedDate, currentDate, {
                locale: ptBR,
            });
            shortenedURL.relativeDate = relativeDate;
            this.setState({ isLoading: false, shortenedURL})
        } catch (error) {
            this.setState({ isLoading: false, errorMessage: 'Ops, as estatísticas da URL solicitada não foram localizadas.'})
        }
    }

    render() {
        const {errorMessage, shortenedURL} = this.state;

        return (
            <Container>
                <Header title="PiTu">Estatísticas</Header>
                {errorMessage ? (
                    <StatsContainer>
                        <FontAwesomeIcon size="3x" color="#f8d7da" icon="exclamation-triangle" />
                        <p className="m-3">{errorMessage}</p>
                        <a className="btn btn-primary" href="/">Encurtar nova URL</a>
                    </StatsContainer>
                ) : (
                    <StatsContainer className="text-center">
                        <h2>{siteURL}/{shortenedURL.code}</h2>
                        <p>Redireciona para <br/>{shortenedURL.url}</p>
                        <StatsRow>
                            <StatsBox>
                                <b>{shortenedURL.hits}</b>
                                <StatsBoxTitle>Visitas</StatsBoxTitle>
                            </StatsBox>
                            <StatsBox>
                                <b>{shortenedURL.relativeDate}</b>
                                <StatsBoxTitle>Última visita</StatsBoxTitle>
                            </StatsBox>
                        </StatsRow>
                        <a className="btn btn-primary mt-4" href="/">Encurtar uma nova URL</a>
                    </StatsContainer>
                )}
            </Container>
        )
    }
}

export default StatsPage;