import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Calendar,
  Plus,
  Pill,
  Activity,
  Clock,
  CheckCircle,
  AlertCircle,
} from 'lucide-react-native';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { theme } from '@/styles/theme';

// Mock data
const mockEvents = [
  {
    id: '1',
    date: '2024-01-15',
    type: 'medication',
    title: 'Medicação - Manhã',
    time: '08:00',
    status: 'completed',
  },
  {
    id: '2',
    date: '2024-01-15',
    type: 'symptom',
    title: 'Registro de sintomas',
    time: '20:00',
    status: 'pending',
  },
  {
    id: '3',
    date: '2024-01-16',
    type: 'medication',
    title: 'Medicação - Manhã',
    time: '08:00',
    status: 'pending',
  },
];

export default function CalendarioScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const getEventsForDate = (date: string) => {
    return mockEvents.filter(event => event.date === date);
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'medication':
        return Pill;
      case 'symptom':
        return Activity;
      default:
        return Clock;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return theme.colors.success;
      case 'pending':
        return theme.colors.warning;
      case 'missed':
        return theme.colors.danger;
      default:
        return theme.colors.muted;
    }
  };

  const todayEvents = getEventsForDate(selectedDate);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        {/* Header com estatísticas */}
        <Card style={styles.statsCard}>
          <CardHeader>
            <CardTitle style={styles.statsTitle}>Resumo do Tratamento</CardTitle>
          </CardHeader>
          <CardContent>
            <View style={styles.statsGrid}>
              <View style={styles.statItem}>
                <View style={[styles.statIcon, { backgroundColor: theme.colors.success[100] }]}>
                  <CheckCircle color={theme.colors.success[600]} size={20} />
                </View>
                <Text style={styles.statValue}>85%</Text>
                <Text style={styles.statLabel}>Adesão</Text>
              </View>
              <View style={styles.statItem}>
                <View style={[styles.statIcon, { backgroundColor: theme.colors.primary[100] }]}>
                  <Calendar color={theme.colors.primary[600]} size={20} />
                </View>
                <Text style={styles.statValue}>45</Text>
                <Text style={styles.statLabel}>Dias</Text>
              </View>
              <View style={styles.statItem}>
                <View style={[styles.statIcon, { backgroundColor: theme.colors.info[100] }]}>
                  <Pill color={theme.colors.info[600]} size={20} />
                </View>
                <Text style={styles.statValue}>3</Text>
                <Text style={styles.statLabel}>Medicamentos</Text>
              </View>
            </View>
          </CardContent>
        </Card>

        {/* Calendário simplificado */}
        <Card style={styles.calendarCard}>
          <CardHeader>
            <View style={styles.calendarHeader}>
              <CardTitle style={styles.calendarTitle}>Janeiro 2024</CardTitle>
              <TouchableOpacity style={styles.addButton}>
                <Plus color={theme.colors.primary[600]} size={20} />
              </TouchableOpacity>
            </View>
          </CardHeader>
          <CardContent>
            <View style={styles.calendarGrid}>
              {/* Dias da semana */}
              {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, index) => (
                <Text key={index} style={styles.dayHeader}>{day}</Text>
              ))}
              
              {/* Dias do mês (simplificado) */}
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                const date = `2024-01-${day.toString().padStart(2, '0')}`;
                const hasEvents = getEventsForDate(date).length > 0;
                const isSelected = date === selectedDate;
                
                return (
                  <TouchableOpacity
                    key={day}
                    style={[
                      styles.dayCell,
                      isSelected && styles.selectedDay,
                      hasEvents && styles.dayWithEvents,
                    ]}
                    onPress={() => setSelectedDate(date)}
                  >
                    <Text style={[
                      styles.dayText,
                      isSelected && styles.selectedDayText
                    ]}>
                      {day}
                    </Text>
                    {hasEvents && <View style={styles.eventDot} />}
                  </TouchableOpacity>
                );
              })}
            </View>
          </CardContent>
        </Card>

        {/* Eventos do dia */}
        <Card style={styles.eventsCard}>
          <CardHeader>
            <CardTitle style={styles.eventsTitle}>
              Eventos de {new Date(selectedDate).toLocaleDateString('pt-BR')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {todayEvents.length > 0 ? (
              <View style={styles.eventsList}>
                {todayEvents.map((event) => {
                  const IconComponent = getEventIcon(event.type);
                  const statusColor = getStatusColor(event.status);
                  
                  return (
                    <View key={event.id} style={styles.eventItem}>
                      <View style={[styles.eventIcon, { backgroundColor: statusColor[100] }]}>
                        <IconComponent color={statusColor[600]} size={16} />
                      </View>
                      <View style={styles.eventContent}>
                        <Text style={styles.eventTitle}>{event.title}</Text>
                        <Text style={styles.eventTime}>{event.time}</Text>
                      </View>
                      <Badge 
                        variant={event.status === 'completed' ? 'default' : 'outline'}
                        style={[
                          styles.eventBadge,
                          { backgroundColor: statusColor[100] }
                        ]}
                      >
                        <Text style={[styles.eventBadgeText, { color: statusColor[700] }]}>
                          {event.status === 'completed' ? 'Concluído' : 'Pendente'}
                        </Text>
                      </Badge>
                    </View>
                  );
                })}
              </View>
            ) : (
              <View style={styles.noEvents}>
                <Calendar color={theme.colors.muted.foreground} size={48} />
                <Text style={styles.noEventsText}>Nenhum evento para este dia</Text>
                <Button 
                  variant="outline" 
                  onPress={() => console.log('Add event')}
                  style={styles.addEventButton}
                >
                  <Plus size={16} />
                  <Text>Adicionar Evento</Text>
                </Button>
              </View>
            )}
          </CardContent>
        </Card>

        {/* Botões de ação */}
        <View style={styles.actionButtons}>
          <Button 
            style={[styles.actionButton, { backgroundColor: theme.colors.success.DEFAULT }]}
            onPress={() => console.log('Add medication')}
          >
            <Pill size={16} />
            <Text style={styles.actionButtonText}>Registrar Medicação</Text>
          </Button>
          <Button 
            style={[styles.actionButton, { backgroundColor: theme.colors.info.DEFAULT }]}
            onPress={() => console.log('Add symptom')}
          >
            <Activity size={16} />
            <Text style={styles.actionButtonText}>Registrar Sintoma</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: theme.spacing.md,
  },
  statsCard: {
    marginBottom: theme.spacing.lg,
  },
  statsTitle: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.foreground,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statIcon: {
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.sm,
  },
  statValue: {
    fontSize: theme.fontSize['2xl'],
    fontWeight: 'bold',
    color: theme.colors.foreground,
    marginBottom: theme.spacing.xs,
  },
  statLabel: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
  },
  calendarCard: {
    marginBottom: theme.spacing.lg,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calendarTitle: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.foreground,
  },
  addButton: {
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.primary[50],
    borderRadius: theme.borderRadius.lg,
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dayHeader: {
    width: '14.28%',
    textAlign: 'center',
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.muted.foreground,
    marginBottom: theme.spacing.sm,
  },
  dayCell: {
    width: '14.28%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
    borderRadius: theme.borderRadius.md,
    position: 'relative',
  },
  selectedDay: {
    backgroundColor: theme.colors.primary.DEFAULT,
  },
  dayWithEvents: {
    backgroundColor: theme.colors.primary[50],
  },
  dayText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.foreground,
  },
  selectedDayText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  eventDot: {
    position: 'absolute',
    bottom: 2,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.colors.primary.DEFAULT,
  },
  eventsCard: {
    marginBottom: theme.spacing.lg,
  },
  eventsTitle: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.foreground,
  },
  eventsList: {
    gap: theme.spacing.md,
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  eventIcon: {
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
  },
  eventContent: {
    flex: 1,
  },
  eventTitle: {
    fontSize: theme.fontSize.md,
    fontWeight: '500',
    color: theme.colors.foreground,
    marginBottom: 2,
  },
  eventTime: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
  },
  eventBadge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
  },
  eventBadgeText: {
    fontSize: 10,
  },
  noEvents: {
    alignItems: 'center',
    paddingVertical: theme.spacing.xl,
  },
  noEventsText: {
    fontSize: theme.fontSize.md,
    color: theme.colors.muted.foreground,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  addEventButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  actionButtons: {
    gap: theme.spacing.md,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.sm,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: theme.fontSize.md,
    fontWeight: '500',
  },
});