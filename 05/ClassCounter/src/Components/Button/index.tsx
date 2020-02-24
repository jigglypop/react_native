import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity``;
const Icon = Styled.Image``;

interface Props {
  iconName: 'plus' | 'minus';
  onPress?: () => void;
}

export default function Button = ({iconName, onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <Icon
        source={
          iconName === 'plus'
            ? require('~/Assets/Images/add.svg')
            : require('~/Assets/Images/remove.svg')
        }
      />
    </Container>
  );
};
