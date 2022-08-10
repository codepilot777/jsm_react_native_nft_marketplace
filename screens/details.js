import React from 'react'
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native';

import { COLORS, SIZES,FONTS, SHADOWS, assets } from '../constants';
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from '../components/Button';

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  console.log(`${data} `)
  return (
    <dDv>Details</dDv>
  )
}

export default Details