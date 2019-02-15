import React, { Component } from 'react'
import { Image, ScrollView, Alert } from 'react-native';
import { Container, Card, CardItem, Header, Left, Body, Right, Title, Footer, Content, Icon, Button, Item, Input, Text, ListItem, List, Spinner, Thumbnail } from 'native-base';
import axios from 'axios';

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: [],

        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('nama', ''),
        };
    };
    componentDidMount() {
        var idplayer = this.props.navigation.getParam('id')
        axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${idplayer}`)
            .then((x) => {
                this.setState({
                    detail: x.data.players[0],
                })
            })
            .catch((err) => {
                Alert.alert('error')
            })
    }
    render() {
        return (
            <Container>
                <Content>
                    <ScrollView>
                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail square source={{ uri: this.props.navigation.getParam('photo') }} />
                                    <Body>
                                        <Text>{this.props.navigation.getParam('nama')}</Text>
                                        <Text note>{this.props.navigation.getParam('national')}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                      
                        <CardItem>
                            <Body>
                                <Image source={{ uri: this.props.navigation.getParam('photo') }} style={{ height: 300, width: 490, flex: 1 }} />
                            </Body>
                        </CardItem>
                        <CardItem>
                        <Body>
                                <Text>{this.props.navigation.getParam('deskripsi')}</Text>
                                </Body>
                        </CardItem>
                        </Card>
                    </ScrollView>
                </Content>
                <Footer></Footer>
            </Container>
        )
    }
}