import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';

// --- Three Column Layout ---

interface ThreeColumnLayoutProps {
  children: React.ReactNode;
}

export function ThreeColumnLayout({ children }: ThreeColumnLayoutProps) {
  const items = React.Children.toArray(children);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {items.slice(0, 3).map((item, index) => (
          <View key={index} style={styles.column}>
            {item}
          </View>
        ))}
      </View>
    </View>
  );
}

// --- Flexible Grid ---

interface FlexibleGridProps {
  data: React.ReactNode[];
  columns?: number;
}

export function FlexibleGrid({ data, columns = 2 }: FlexibleGridProps) {
  const { width } = useWindowDimensions();
  const spacing = 12;
  const itemWidth = (width - spacing * (columns + 1)) / columns;

  const rows = data.reduce<React.ReactNode[][]>((acc, item, index) => {
    if (index % columns === 0) acc.push([]);
    acc[acc.length - 1].push(item);
    return acc;
  }, []);

  return (
    <View style={[styles.container, { padding: spacing }]}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((item, colIndex) => (
            <View
              key={colIndex}
              style={{
                width: itemWidth,
                marginRight: colIndex < columns - 1 ? spacing : 0,
                marginBottom: spacing,
              }}
            >
              {item}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

// --- Styles ---

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    marginHorizontal: 6,
  },
});