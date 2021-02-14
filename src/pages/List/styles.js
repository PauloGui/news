import styled from 'styled-components/native';
import {Pressable} from 'react-native';

export const Container = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
`;

export const Header = styled.Text`
  align-self: center;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 30px;
`;

export const NewsContainer = styled.View`
  padding-top: 10px;
  justify-content: center;
`;

export const Title = styled.Text`
  elevation: 2;
  margin-top: -63px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  padding: 10px;

  background: rgba(0, 0, 0, 0.6);
`;

export const ImageNews = styled.Image`
  flex: 1;
  height: 250px;
  resize-mode: cover;
`;

export const Content = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
  text-align: justify;
  padding: 10px;
`;

// MODAL

export const ViewModal = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CenteredView = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-top: 22px;
`;

export const ModalView = styled.View`
  background-color: #fff;
  border-radius: 20px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2px;
  }
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
`;

export const PressableClose = styled(Pressable)`
  background-color: #2196f3;
  border-radius: 20px;
  padding: 10px;
  elevation: 3;
  margin-bottom: 30px;
`;

export const ImageModal = styled.Image`
  width: 400px;
  height: 250px;
  border-radius: 10px;
  resize-mode: cover;
`;

export const StrongModal = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SpanModal = styled.Text`
  color: #000;
  font-size: 16px;
`;

export const ExpModal = styled.View`
  width: 100%;
  align-self: flex-start;
  margin: 10px 0;
  flex-direction: row;
`;

export const TitleExp = styled.Text`
  font-weight: bold;
  font-size: 14px;
  padding: 10px 0;
  align-self: flex-start;
`;

export const TitleCia = styled.Text`
  font-weight: bold;
  color: #000;
`;

export const TitleJob = styled.Text``;
