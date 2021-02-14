import React, {useState} from 'react';
import {
  SafeAreaView,
  Modal,
  Text,
  FlatList,
  Pressable,
  Alert,
} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import Loading from '../../components/Loading';

import {
  Container,
  Header,
  Title,
  ImageNews,
  Content,
  NewsContainer,
  ViewModal,
  CenteredView,
  ModalView,
  PressableClose,
  ImageModal,
  StrongModal,
} from './styles';

const GET_NEWS = gql`
  query get_news {
    newspaper {
      id
      image
      title
      content
    }
  }
`;

const List = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectItem, setSelectItem] = useState([]);
  const {loading, error, data} = useQuery(GET_NEWS);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Text>error</Text>;
  }

  const DateNews = data.newspaper;

  return (
    <>
      <SafeAreaView>
        <Container>
          <Header>Home</Header>

          <FlatList
            data={DateNews}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => (
              <>
                <NewsContainer>
                  <ImageNews source={{uri: item.image}} />
                  <Pressable
                    onPress={() => {
                      setSelectItem(item);
                      setModalVisible(true);
                    }}>
                    <Title>{item.title} </Title>
                  </Pressable>
                </NewsContainer>

                <Modal
                  selectItem
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                  }}>
                  <ViewModal>
                    <CenteredView>
                      <ModalView>
                        <ImageModal source={{uri: selectItem.image}} />
                        <StrongModal>{selectItem.title}</StrongModal>
                        <Content>{selectItem.content}</Content>

                        <PressableClose
                          onPress={() => {
                            setSelectItem([]);
                            setModalVisible(!modalVisible);
                          }}>
                          <Text
                            style={{
                              fontSize: 16,
                              color: '#fff',
                              fontWeight: 'bold',
                            }}>
                            Fechar
                          </Text>
                        </PressableClose>
                      </ModalView>
                    </CenteredView>
                  </ViewModal>
                </Modal>
              </>
            )}
          />
        </Container>
      </SafeAreaView>
    </>
  );
};

export default List;
