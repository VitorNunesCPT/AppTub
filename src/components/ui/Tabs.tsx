import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ViewStyle } from 'react-native';
import { theme } from '@/styles/theme';

interface TabsProps {
  children: React.ReactNode;
  defaultValue: string;
  style?: ViewStyle;
}

interface TabsListProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

interface TabsTriggerProps {
  children: React.ReactNode;
  value: string;
  style?: ViewStyle;
}

interface TabsContentProps {
  children: React.ReactNode;
  value: string;
  style?: ViewStyle;
}

interface TabsContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabsContext = React.createContext<TabsContextType | null>(null);

export const Tabs: React.FC<TabsProps> = ({ children, defaultValue, style }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <View style={[styles.tabs, style]}>
        {children}
      </View>
    </TabsContext.Provider>
  );
};

export const TabsList: React.FC<TabsListProps> = ({ children, style }) => {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={[styles.tabsList, style]}
      contentContainerStyle={styles.tabsListContent}
    >
      {children}
    </ScrollView>
  );
};

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ children, value, style }) => {
  const context = React.useContext(TabsContext);
  
  if (!context) {
    throw new Error('TabsTrigger must be used within Tabs');
  }

  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === value;

  return (
    <TouchableOpacity
      style={[
        styles.tabsTrigger,
        isActive && styles.tabsTriggerActive,
        style
      ]}
      onPress={() => setActiveTab(value)}
      activeOpacity={0.7}
    >
      <Text style={[
        styles.tabsTriggerText,
        isActive && styles.tabsTriggerTextActive
      ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export const TabsContent: React.FC<TabsContentProps> = ({ children, value, style }) => {
  const context = React.useContext(TabsContext);
  
  if (!context) {
    throw new Error('TabsContent must be used within Tabs');
  }

  const { activeTab } = context;

  if (activeTab !== value) {
    return null;
  }

  return (
    <View style={[styles.tabsContent, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    flex: 1,
  },
  tabsList: {
    flexGrow: 0,
    marginBottom: theme.spacing.md,
  },
  tabsListContent: {
    paddingHorizontal: theme.spacing.xs,
    gap: theme.spacing.xs,
  },
  tabsTrigger: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.muted.DEFAULT,
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
  },
  tabsTriggerActive: {
    backgroundColor: theme.colors.primary.DEFAULT,
  },
  tabsTriggerText: {
    fontSize: theme.fontSize.sm,
    fontWeight: '500',
    color: theme.colors.muted.foreground,
    textAlign: 'center',
  },
  tabsTriggerTextActive: {
    color: '#ffffff',
  },
  tabsContent: {
    flex: 1,
  },
});