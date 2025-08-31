import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { 
  Button, 
  Card, 
  CardHeader, 
  CardContent, 
  CardTitle, 
  CardDescription,
  Badge,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Alert,
  AlertDescription
} from '@/components/ui';
import { ArrowLeft, Heart, CheckCircle, AlertTriangle, Clock, Users, Home, Pill } from 'lucide-react-native';
import { theme } from '@/styles/theme';

export default function AutocuidadoPage() {
  const acoesCuidado = [
    {
      categoria: "Coleta de Exames",
      icon: "🧪",
      acoes: [
        "Coletar escarro corretamente (5-10ml)",
        "Lavar as mãos após coleta",
        "Seguir orientações para Prova Tuberculínica",
        "Retornar para leitura da PT no prazo correto",
      ],
    },
    {
      categoria: "Adesão ao Tratamento",
      icon: "💊",
      acoes: [
        "Tomar medicação conforme prescrito",
        "Usar porta-comprimidos ou caixas identificadas",
        "Comunicar dificuldades à equipe",
        "Participar do Tratamento Diretamente Observado (TDO)",
      ],
    },
    {
      categoria: "Monitoramento de Efeitos",
      icon: "⚠️",
      acoes: [
        "Estar ciente dos efeitos adversos possíveis",
        "Reportar sintomas à unidade de saúde",
        "Tomar Piridoxina (Vitamina B6) quando indicada",
        "Comparecer às consultas de acompanhamento",
      ],
    },
    {
      categoria: "Controle de Infecção",
      icon: "🛡️",
      acoes: [
        "Cobrir boca e nariz ao tossir/espirrar",
        "Garantir ventilação adequada em casa",
        "Usar máscara cirúrgica quando bacilífero",
        "Manter ambientes com luz solar",
      ],
    },
  ];

  const importancia = [
    {
      aspecto: "Qualidade Diagnóstica",
      descricao: "Garante amostras adequadas e resultados precisos",
      impacto: "Diagnóstico correto",
    },
    {
      aspecto: "Cura da Doença",
      descricao: "Adesão ao tratamento é fundamental para cura",
      impacto: "Sucesso terapêutico",
    },
    {
      aspecto: "Prevenção de Resistência",
      descricao: "Uso correto evita bacilos resistentes",
      impacto: "Tratamento eficaz",
    },
    {
      aspecto: "Segurança do Paciente",
      descricao: "Monitoramento previne complicações",
      impacto: "Tratamento seguro",
    },
    {
      aspecto: "Controle da Transmissão",
      descricao: "Medidas reduzem risco de contágio",
      impacto: "Proteção da comunidade",
    },
  ];

  const locaisTempos = [
    {
      local: "Em Casa",
      quando: "Diariamente",
      atividades: ["Tomar medicação", "Ventilação", "Cobrir tosse", "Coleta de escarro"],
    },
    {
      local: "Unidade de Saúde",
      quando: "Consultas agendadas",
      atividades: ["TDO", "Reportar efeitos", "Exames", "Orientações"],
    },
    {
      local: "Ambientes Públicos",
      quando: "Sempre que necessário",
      atividades: ["Medidas de controle", "Etiqueta da tosse"],
    },
    {
      local: "Trabalho",
      quando: "Durante atividades",
      atividades: ["Ventilação", "Proteção respiratória"],
    },
  ];

  const dosagens = [
    {
      medicamento: "Isoniazida (H)",
      dose: "5-10 mg/kg/dia",
      observacao: "Dose padrão para adultos",
    },
    {
      medicamento: "Piridoxina (B6)",
      dose: "50-100 mg/dia",
      observacao: "1-2 mg/kg/dia para lactentes",
    },
    {
      medicamento: "ILTB com H",
      dose: "270 doses",
      observacao: "Ao longo de 9-12 meses",
    },
  ];

  const sinaisAlerta = [
    "Náuseas e vômitos persistentes",
    "Dor abdominal intensa",
    "Icterícia (amarelão)",
    "Formigamento nas mãos/pés",
    "Alterações visuais",
    "Erupções na pele",
    "Febre persistente",
    "Perda auditiva",
  ];

  const participantes = [
    {
      tipo: "Paciente",
      emoji: "👤",
      descricao: "Responsável principal pelas ações de autocuidado",
    },
    {
      tipo: "Familiares/Cuidadores",
      emoji: "👨‍👩‍👧‍👦",
      descricao: "Apoiam especialmente crianças e pessoas vulneráveis",
    },
    {
      tipo: "Equipe de Saúde",
      emoji: "👩‍⚕️",
      descricao: "Orienta, apoia e supervisiona o autocuidado",
    },
  ];

  const informacoesQuantitativas = [
    {
      tipo: "Coleta de Escarro",
      valor: "Volume: 5-10ml | Frequência: 1-2 amostras",
      cor: theme.colors.primary,
    },
    {
      tipo: "Duração do Tratamento",
      valor: "Esquema Básico: 6 meses | ILTB: 9-12 meses",
      cor: theme.colors.success,
    },
    {
      tipo: "Monitoramento",
      valor: "Crianças: mensal | ILTB: 30-60 dias | Função hepática: mais frequente em usuários de álcool",
      cor: "#f97316",
    },
    {
      tipo: "Sintomáticos Respiratórios",
      valor: "Tosse ≥2-3 semanas (qualquer duração em grupos específicos)",
      cor: "#a855f7",
    },
  ];

  const handleGoBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <ArrowLeft size={24} color={theme.colors.foreground} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <View style={styles.titleContainer}>
            <Heart size={24} color="#ec4899" />
            <Text style={styles.title}>Dicas de Autocuidado</Text>
          </View>
          <Text style={styles.subtitle}>Orientações para pacientes e cuidadores</Text>
        </View>
      </View>

      <Tabs defaultValue="acoes" style={styles.tabs}>
        <TabsList style={styles.tabsList}>
          <TabsTrigger value="acoes" style={styles.tabsTrigger}>
            <Text style={styles.tabText}>Ações</Text>
          </TabsTrigger>
          <TabsTrigger value="importancia" style={styles.tabsTrigger}>
            <Text style={styles.tabText}>Por Quê</Text>
          </TabsTrigger>
          <TabsTrigger value="onde-quando" style={styles.tabsTrigger}>
            <Text style={styles.tabText}>Onde/Quando</Text>
          </TabsTrigger>
          <TabsTrigger value="dosagens" style={styles.tabsTrigger}>
            <Text style={styles.tabText}>Dosagens</Text>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="acoes">
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Alert style={styles.alert}>
              <Heart size={20} color={theme.colors.primary} />
              <AlertDescription>
                O autocuidado é um processo colaborativo entre você e a equipe de saúde. Sua participação ativa é
                fundamental para o sucesso do tratamento.
              </AlertDescription>
            </Alert>

            {acoesCuidado.map((categoria, index) => (
              <Card key={index} style={styles.card}>
                <CardHeader>
                  <CardTitle style={styles.cardTitle}>
                    <Text style={styles.categoryIcon}>{categoria.icon}</Text>
                    <Text style={styles.cardTitleText}>{categoria.categoria}</Text>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {categoria.acoes.map((acao, idx) => (
                    <View key={idx} style={styles.actionItem}>
                      <CheckCircle size={16} color={theme.colors.success} />
                      <Text style={styles.actionText}>{acao}</Text>
                    </View>
                  ))}
                </CardContent>
              </Card>
            ))}

            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <AlertTriangle size={20} color="#f59e0b" />
                  <Text style={styles.cardTitleText}>Sinais de Alerta</Text>
                </CardTitle>
                <CardDescription>Procure a unidade de saúde imediatamente se apresentar:</CardDescription>
              </CardHeader>
              <CardContent>
                <View style={styles.alertGrid}>
                  {sinaisAlerta.map((sinal, index) => (
                    <View key={index} style={styles.alertSignItem}>
                      <AlertTriangle size={16} color="#f59e0b" />
                      <Text style={styles.alertSignText}>{sinal}</Text>
                    </View>
                  ))}
                </View>
              </CardContent>
            </Card>
          </ScrollView>
        </TabsContent>

        <TabsContent value="importancia">
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitleText}>Por que o Autocuidado é Importante?</CardTitle>
                <CardDescription>Entenda o impacto de cada ação no seu tratamento</CardDescription>
              </CardHeader>
              <CardContent>
                {importancia.map((item, index) => (
                  <View key={index} style={styles.importanceItem}>
                    <View style={styles.importanceHeader}>
                      <Text style={styles.importanceTitle}>{item.aspecto}</Text>
                      <Badge variant="secondary" style={styles.badge}>
                        <Text style={styles.badgeText}>{item.impacto}</Text>
                      </Badge>
                    </View>
                    <Text style={styles.importanceDescription}>{item.descricao}</Text>
                  </View>
                ))}
              </CardContent>
            </Card>

            <Alert style={styles.alert}>
              <AlertTriangle size={20} color={theme.colors.primary} />
              <AlertDescription>
                <Text style={styles.alertBold}>Lembre-se:</Text> O uso irregular dos medicamentos pode levar ao desenvolvimento de bacilos
                resistentes, tornando o tratamento mais difícil e prolongado.
              </AlertDescription>
            </Alert>
          </ScrollView>
        </TabsContent>

        <TabsContent value="onde-quando">
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            {locaisTempos.map((item, index) => (
              <Card key={index} style={styles.card}>
                <CardHeader>
                  <View style={styles.locationHeader}>
                    <View>
                      <CardTitle style={styles.cardTitle}>
                        <Home size={16} color={theme.colors.primary} />
                        <Text style={styles.cardTitleText}>{item.local}</Text>
                      </CardTitle>
                      <View style={styles.timeContainer}>
                        <Clock size={12} color={theme.colors.muted.foreground} />
                        <Text style={styles.timeText}>{item.quando}</Text>
                      </View>
                    </View>
                  </View>
                </CardHeader>
                <CardContent>
                  <View style={styles.activitiesContainer}>
                    {item.atividades.map((atividade, idx) => (
                      <Badge key={idx} variant="outline" style={styles.activityBadge}>
                        <Text style={styles.badgeText}>{atividade}</Text>
                      </Badge>
                    ))}
                  </View>
                </CardContent>
              </Card>
            ))}

            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <Users size={20} color="#a855f7" />
                  <Text style={styles.cardTitleText}>Quem Participa do Autocuidado</Text>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {participantes.map((participante, index) => (
                  <View key={index} style={styles.participantItem}>
                    <View style={styles.participantIcon}>
                      <Text style={styles.participantEmoji}>{participante.emoji}</Text>
                    </View>
                    <View style={styles.participantInfo}>
                      <Text style={styles.participantType}>{participante.tipo}</Text>
                      <Text style={styles.participantDescription}>{participante.descricao}</Text>
                    </View>
                  </View>
                ))}
              </CardContent>
            </Card>
          </ScrollView>
        </TabsContent>

        <TabsContent value="dosagens">
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <Pill size={20} color={theme.colors.success} />
                  <Text style={styles.cardTitleText}>Dosagens e Quantidades</Text>
                </CardTitle>
                <CardDescription>Informações importantes sobre medicamentos e exames</CardDescription>
              </CardHeader>
              <CardContent>
                {dosagens.map((item, index) => (
                  <View key={index} style={styles.dosageItem}>
                    <View>
                      <Text style={styles.dosageMedication}>{item.medicamento}</Text>
                      <Text style={styles.dosageObservation}>{item.observacao}</Text>
                    </View>
                    <Badge variant="outline" style={styles.badge}>
                      <Text style={styles.badgeText}>{item.dose}</Text>
                    </Badge>
                  </View>
                ))}
              </CardContent>
            </Card>

            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitleText}>Outras Informações Quantitativas</CardTitle>
              </CardHeader>
              <CardContent>
                {informacoesQuantitativas.map((info, index) => (
                  <View key={index} style={[styles.quantitativeInfo, { borderLeftColor: info.cor }]}>
                    <Text style={styles.quantitativeTitle}>{info.tipo}</Text>
                    <Text style={styles.quantitativeValue}>{info.valor}</Text>
                  </View>
                ))}
              </CardContent>
            </Card>

            <Alert style={styles.alert}>
              <Pill size={20} color={theme.colors.primary} />
              <AlertDescription>
                <Text style={styles.alertBold}>Importante:</Text> Nunca altere as doses ou pare o tratamento por conta própria. Sempre converse
                com sua equipe de saúde sobre qualquer dúvida ou dificuldade.
              </AlertDescription>
            </Alert>
          </ScrollView>
        </TabsContent>
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    paddingTop: theme.spacing.xl,
    backgroundColor: theme.colors.background,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  backButton: {
    padding: theme.spacing.sm,
    marginRight: theme.spacing.sm,
  },
  headerContent: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  title: {
    fontSize: theme.fontSize.xl,
    fontWeight: '700',
    color: theme.colors.foreground,
  },
  subtitle: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
    marginTop: theme.spacing.xs,
  },
  tabs: {
    flex: 1,
  },
  tabsList: {
    flexDirection: 'row',
    backgroundColor: theme.colors.muted.DEFAULT,
    margin: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.xs,
  },
  tabsTrigger: {
    flex: 1,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: theme.fontSize.sm,
    fontWeight: '500',
    color: theme.colors.muted.foreground,
  },
  scrollView: {
    flex: 1,
    padding: theme.spacing.md,
  },
  alert: {
    marginBottom: theme.spacing.md,
  },
  alertBold: {
    fontWeight: '600',
  },
  card: {
    marginBottom: theme.spacing.md,
  },
  cardTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  cardTitleText: {
    fontSize: theme.fontSize.lg,
    fontWeight: '600',
    color: theme.colors.foreground,
  },
  categoryIcon: {
    fontSize: theme.fontSize.lg,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  actionText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.foreground,
    flex: 1,
  },
  alertGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  alertSignItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    padding: theme.spacing.sm,
    backgroundColor: '#f59e0b' + '20',
    borderRadius: theme.borderRadius.md,
    flex: 1,
    minWidth: '45%',
  },
  alertSignText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.foreground,
    flex: 1,
  },
  importanceItem: {
    borderLeftWidth: 4,
    borderLeftColor: '#ec4899',
    paddingLeft: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  importanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.sm,
  },
  importanceTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    flex: 1,
    marginRight: theme.spacing.sm,
  },
  importanceDescription: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
  },
  badge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontSize: theme.fontSize.xs,
    fontWeight: '500',
  },
  locationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
    marginTop: theme.spacing.xs,
  },
  timeText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
  },
  activitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  activityBadge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
  },
  participantItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  participantIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#a855f7' + '20',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  participantEmoji: {
    fontSize: theme.fontSize.sm,
  },
  participantInfo: {
    flex: 1,
  },
  participantType: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
  },
  participantDescription: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted.foreground,
    marginTop: theme.spacing.xs,
  },
  dosageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.sm,
  },
  dosageMedication: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
  },
  dosageObservation: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted.foreground,
  },
  quantitativeInfo: {
    borderLeftWidth: 4,
    paddingLeft: theme.spacing.sm,
    paddingVertical: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  quantitativeTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    marginBottom: theme.spacing.xs,
  },
  quantitativeValue: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
  },
});