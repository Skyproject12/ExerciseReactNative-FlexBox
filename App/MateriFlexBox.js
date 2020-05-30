/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

// flex akan auto column atau kebawah jika tidak mendefinisikan flex di style
class MateriFlexBox extends Component {
  render() {
    return (
      // memberi flex menjadi row atau kesamping
      // alignItem -> membuat item menjadi rata sesuai kebutuhan (khusus untuk atas bawah)
      // untuk membuat item menjadi rata bawah maka tambahkan flex end, center (tengah), flex start(rata atas)
      // <View
      //   style={{
      //     flexDirection: 'row',
      //     backgroundColor: '#1dd1a1',
      //     alignItems: 'flex-end',
      //   }}>
      //   <View style={{backgroundColor: '#ee5253', flex: 1, height: 50}} />
      //   <View style={{backgroundColor: '#ffffff', flex: 2, height: 100}} />
      //   <View style={{backgroundColor: '#000000', flex: 3, height: 150}} />
      //   <View style={{backgroundColor: '#feca57', flex: 4, height: 200}} />
      // </View>
      // justifyContent -> membuat item menjadi rata sesuai kebutuhan (khusus untuk kanan dan kiri)
      // space beetwen membuat layout menjadi memiliki nilai space sama besar
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#1dd1a1',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}>
          <View style={{ backgroundColor: '#ee5253', width: 50, height: 50 }} />
          <View style={{ backgroundColor: '#ffffff', width: 50, height: 50 }} />
          <View style={{ backgroundColor: '#000000', width: 50, height: 50 }} />
          <View style={{ backgroundColor: '#feca57', width: 50, height: 50 }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
          <Text>Branda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/id/thumb/7/7a/Manchester_United_FC_crest.svg/330px-Manchester_United_FC_crest.svg.png' }}
            style={{ width: 100, height: 100, borderRadius: 50 }} />
          <View style={{flexDirection:'column', justifyContent:'center'}}>
            <Text>Sumendra</Text>
            <Text>100 ribu subscrib</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default MateriFlexBox;
