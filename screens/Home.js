import React, {Component} from 'react'
import { Container, Content, Text, Button} from 'native-base'

export default class Home extends Component{
    render(){
        return (
            <Container>
                <Content>
                    <Text> Home Page </Text>
                    <Button onPress={()=> this.props.navigation.navigate('Detail', {id: 1})}>
                        <Text> Goto Detail </Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

