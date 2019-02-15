import React, { Component } from 'react'
import { Container, Header, Content, Footer, Button, Icon, Item, Text, Input, List, ListItem, Body, Left, Thumbnail } from 'native-base'
import { Alert } from 'react-native'
import { ScrollView } from 'react-native'
import axios from 'axios'
export default class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPlayer: [],
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('klubName', ''),
        };
    };

    componentDidMount() {
        
        var klubId = this.props.navigation.getParam('klubId')
        axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${klubId}`)
            .then((x) => {
                this.setState({
                    dataPlayer: x.data.player,
                })
                console.log(x.data.player)
            })
            .catch((err) => {
                Alert.alert('erorr')
            })
    }
    render() {
        let dataPlayers = this.state.dataPlayer.map((item, index) => {
            let id = item.idPlayer
            let nama = item.strPlayer
            let photo = item.strThumb
            let photo2 = 'https://www.lifewire.com/thmb/OO7CD06NAdoIwv71DgUgBiTd4ps=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_325494917-5a68d8403418c600190a3e1f.jpg'
            if (photo2 == false) {
                photo = photo2
            }
            let posisi = item.strPosition
            let deskripsi = item.strDescriptionEN
            let national = item.strNationality
            return (
                <ListItem key={index} avatar onPress={() => {
                    this.props.navigation.navigate('HalTiga', {
                        id: id,
                        nama: nama,
                        national: national,
                        photo: photo,
                        deskripsi: deskripsi,
                    })
                }}>
                    <Left>
                        <Thumbnail square source={{ uri: photo }} />
                    </Left>
                    <Body>
                        <Text>{nama}</Text>
                        <Text note>{posisi}</Text>
                    </Body>

                </ListItem>
            )
        })
        return (
            <Container>
                <Header style={{ backgroundColor: 'lightgreen' }}>
                </Header>
                <Content>
                    <ScrollView>
                        <List>
                            {dataPlayers}
                        </List>
                    </ScrollView>
                </Content>
                <Footer></Footer>
            </Container>

        )
    }
}