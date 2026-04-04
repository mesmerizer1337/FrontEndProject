import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { GridLayout, Card } from '../../components/GridLayout';
import { ResponsiveHeader, ResponsiveContainer } from '../../components/ResponsiveHeader';
import { AdaptiveLayout, FeatureCard, StatsRow } from '../../components/AdaptiveLayout';

export default function App() {
  const [title, setTitle] = useState('My App');

  return (
    <SafeAreaProvider>
      {/* Task 2: Хедер с safe area */}
      <ResponsiveHeader
        title={title}
        leftAction={{
          icon: '☰',
          onPress: () => console.log('Menu pressed'),
        }}
        rightAction={{
          icon: '⚙️',
          onPress: () => console.log('Settings pressed'),
        }}
      />

      {/* Task 2: Контейнер — на планшете покажет sidebar */}
      <ResponsiveContainer>
        <ScrollView>

          {/* Task 3: Статистика */}
          <View style={{ marginTop: 16 }}>
            <StatsRow
              stats={[
                { label: 'Users',   value: '1.2K' },
                { label: 'Posts',   value: '340'  },
                { label: 'Likes',   value: '8.9K' },
              ]}
            />
          </View>

          {/* Task 3: Карточки с фичами */}
          <FeatureCard
            icon="🚀"
            title="Fast Performance"
            description="Optimized layouts using Flexbox for smooth rendering on any device."
            variant="primary"
          />
          <FeatureCard
            icon="📱"
            title="Responsive Design"
            description="Adapts automatically to phones, tablets, portrait and landscape."
            variant="secondary"
          />
          <FeatureCard
            icon="🎨"
            title="Clean UI"
            description="Consistent spacing and typography across all screen sizes."
            variant="accent"
          />

          {/* Task 1: Сетка из карточек */}
          <GridLayout columns={2} spacing={12}>
            <Card title="Card 1" subtitle="Subtitle here" />
            <Card title="Card 2" subtitle="Subtitle here" />
            <Card title="Card 3" subtitle="Subtitle here" />
            <Card title="Card 4" subtitle="Subtitle here" />
          </GridLayout>

        </ScrollView>
      </ResponsiveContainer>
    </SafeAreaProvider>
  );
}