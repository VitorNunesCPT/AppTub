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
import { ArrowLeft, ShieldAlert, Users, MapPin, Clock, User, Settings, Calculator, Shield } from 'lucide-react-native';
import { theme } from '@/styles/theme';

export default function PrevencaoPage() {
  const estrategias = [
    {
      titulo: "Vacinação BCG",
      descricao: "Para crianças de 0 a 4 anos, 11 meses e 29 dias, idealmente ao nascer",
      objetivo: "Prevenir formas graves da doença em crianças",
    },
    {
      titulo: "Detecção de Casos",
      descricao: "Identificação precoce através de busca ativa e passiva",
      objetivo: "Identificar sintomáticos respiratórios em diversos ambientes",
    },
    {
      titulo: "Investigação de Contatos",
      descricao: "Avaliação de contatos de casos confirmados",
      objetivo: "Identificar casos de TB e pessoas recém-infectadas",
    },
    {
      titulo: "Tratamento da TB Ativa",
      descricao: "Garantir tratamento adequado e de alta qualidade",
      objetivo: "Curar pacientes e interromper transmissão",
    },
    {
      titulo: "Tratamento da ILTB",
      descricao: "Tratar infecção latente em populações de risco",
      objetivo: "Prevenir progressão para doença ativa",
    },
    {
      titulo: "Controle de Infecção",
      descricao: "Medidas administrativas, ambientais e de proteção",
      objetivo: "Reduzir transmissão em ambientes de saúde",
    },
  ];

  const locais = [
    "Atenção Básica (principal porta de entrada)",
    "Serviços especializados e hospitais",
    "Domicílio do paciente",
    "Prisões e albergues",
    "Comunidades terapêuticas",
    "Serviços para PVHIV",
    "Laboratórios de referência",
  ];

  const momentos = [
    "No nascimento (vacinação BCG)",
    "Quando há suspeita de TB",
    "Ao diagnosticar caso de TB ativa",
    "Durante todo o tratamento",
    "Em contatos de casos confirmados",
    "Em admissões hospitalares/prisionais",
    "Periodicamente em populações de risco",
  ];

  const responsaveis = [
    "Equipe de saúde (todos os níveis)",
    "Autoridades e gestores de saúde",
    "Pacientes e familiares",
    "Profissionais de outros setores",
    "População em geral",
    "Agentes comunitários de saúde",
  ];

  const implementacao = [
    "Planos e diretrizes (End TB Strategy)",
    "Organização da rede de atenção",
    "Protocolos padronizados",
    "Capacitação de profissionais",
    "Educação em saúde",
    "Sistemas de informação",
    "Parcerias intersetoriais",
    "Tratamento Diretamente Observado (TDO)",
  ];

  const metas = [
    {
      indicador: "Incidência",
      meta: "<10 casos por 100 mil habitantes",
    },
    {
      indicador: "Mortalidade",
      meta: "<1 óbito por 100 mil habitantes",
    },
    {
      indicador: "Cobertura BCG",
      meta: "Altas e homogêneas coberturas",
    },
    {
      indicador: "Rastreamento PPL",
      meta: "2x por ano idealmente",
    },
    {
      indicador: "TDO",
      meta: "5x/semana (mínimo 3x para TB DR)",
    },
    {
      indicador: "Seguimento TB resistente",
      meta: "Pelo menos 5 anos pós-cura",
    },
  ];

  const beneficiosPrevencao = [
    "Reduzir incidência e mortalidade por tuberculose",
    "Interromper a cadeia de transmissão do M. tuberculosis",
    "Prevenir progressão da infecção para doença ativa",
    "Prevenir formas graves, especialmente em crianças",
    "Prevenir tuberculose drogarresistente",
  ];

  const valoresReferencia = [
    {
      tipo: "Prova Tuberculínica (PT)",
      valor: "≥5mm para contatos/PVHIV | ≥10mm para outros",
      cor: "#ef4444",
    },
    {
      tipo: "Esquemas de Tratamento",
      valor: "TB ativa: 6 meses | ILTB: 6H/9H/4R/3HP",
      cor: theme.colors.primary,
    },
    {
      tipo: "TB Drogarresistente",
      valor: "Mínimo 4 medicamentos efetivos (TB DR) | 5 medicamentos (TB XDR)",
      cor: theme.colors.success,
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
            <ShieldAlert size={24} color="#14b8a6" />
            <Text style={styles.title}>Prevenção da Tuberculose</Text>
          </View>
          <Text style={styles.subtitle}>Estratégias para prevenir e controlar a TB</Text>
        </View>
      </View>

      <Alert style={styles.bcgAlert}>
        <Shield size={20} color="#0ea5e9" />
        <AlertDescription>
          <Text style={styles.alertTitle}>Importante: Sobre a Vacina BCG</Text>
          <Text style={styles.alertText}>
            A vacina BCG é administrada <Text style={styles.boldText}>exclusivamente para crianças</Text> de 0 a 4 anos, 11 meses e 29
            dias, preferencialmente logo após o nascimento. É aplicada em <Text style={styles.boldText}>dose única</Text> e protege contra
            as formas graves da tuberculose, como a meníngea e a miliar.
          </Text>
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="estrategias" style={styles.tabs}>
        <TabsList style={styles.tabsList}>
          <TabsTrigger value="estrategias" style={styles.tabsTrigger}>
            <Text style={styles.tabText}>O Quê</Text>
          </TabsTrigger>
          <TabsTrigger value="onde-quando" style={styles.tabsTrigger}>
            <Text style={styles.tabText}>Onde/Quando</Text>
          </TabsTrigger>
          <TabsTrigger value="quem-como" style={styles.tabsTrigger}>
            <Text style={styles.tabText}>Quem/Como</Text>
          </TabsTrigger>
          <TabsTrigger value="metas" style={styles.tabsTrigger}>
            <Text style={styles.tabText}>Metas</Text>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="estrategias">
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitleText}>Estratégias de Prevenção</CardTitle>
                <CardDescription>Principais ações para prevenir a tuberculose</CardDescription>
              </CardHeader>
              <CardContent>
                {estrategias.map((estrategia, index) => (
                  <View key={index} style={styles.strategyItem}>
                    <Text style={styles.strategyTitle}>{estrategia.titulo}</Text>
                    <Text style={styles.strategyDescription}>{estrategia.descricao}</Text>
                    <Badge variant="secondary" style={styles.badge}>
                      <Text style={styles.badgeText}>{estrategia.objetivo}</Text>
                    </Badge>
                  </View>
                ))}
              </CardContent>
            </Card>

            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitleText}>Por que Prevenir?</CardTitle>
              </CardHeader>
              <CardContent>
                {beneficiosPrevencao.map((beneficio, index) => (
                  <View key={index} style={styles.benefitItem}>
                    <View style={styles.bullet} />
                    <Text style={styles.benefitText}>{beneficio}</Text>
                  </View>
                ))}
              </CardContent>
            </Card>
          </ScrollView>
        </TabsContent>

        <TabsContent value="onde-quando">
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <MapPin size={20} color={theme.colors.primary} />
                  <Text style={styles.cardTitleText}>Onde são Realizadas</Text>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {locais.map((local, index) => (
                  <View key={index} style={styles.locationItem}>
                    <View style={[styles.locationBullet, { backgroundColor: theme.colors.primary }]} />
                    <Text style={styles.locationText}>{local}</Text>
                  </View>
                ))}
              </CardContent>
            </Card>

            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <Clock size={20} color="#f97316" />
                  <Text style={styles.cardTitleText}>Quando são Realizadas</Text>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {momentos.map((momento, index) => (
                  <View key={index} style={styles.momentItem}>
                    <View style={[styles.momentBullet, { backgroundColor: "#f97316" }]} />
                    <Text style={styles.momentText}>{momento}</Text>
                  </View>
                ))}
              </CardContent>
            </Card>
          </ScrollView>
        </TabsContent>

        <TabsContent value="quem-como">
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <Users size={20} color="#a855f7" />
                  <Text style={styles.cardTitleText}>Quem são os Responsáveis</Text>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {responsaveis.map((responsavel, index) => (
                  <View key={index} style={styles.responsibleItem}>
                    <User size={16} color="#a855f7" />
                    <Text style={styles.responsibleText}>{responsavel}</Text>
                  </View>
                ))}
              </CardContent>
            </Card>

            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <Settings size={20} color={theme.colors.success} />
                  <Text style={styles.cardTitleText}>Como são Implementadas</Text>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {implementacao.map((item, index) => (
                  <View key={index} style={styles.implementationItem}>
                    <View style={[styles.implementationBullet, { backgroundColor: theme.colors.success }]} />
                    <Text style={styles.implementationText}>{item}</Text>
                  </View>
                ))}
              </CardContent>
            </Card>
          </ScrollView>
        </TabsContent>

        <TabsContent value="metas">
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <Calculator size={20} color="#ef4444" />
                  <Text style={styles.cardTitleText}>Metas Quantitativas</Text>
                </CardTitle>
                <CardDescription>Indicadores e metas para prevenção da TB</CardDescription>
              </CardHeader>
              <CardContent>
                {metas.map((meta, index) => (
                  <View key={index} style={styles.metaItem}>
                    <Text style={styles.metaIndicator}>{meta.indicador}</Text>
                    <Badge variant="outline" style={styles.badge}>
                      <Text style={styles.badgeText}>{meta.meta}</Text>
                    </Badge>
                  </View>
                ))}
              </CardContent>
            </Card>

            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitleText}>Valores de Referência Importantes</CardTitle>
              </CardHeader>
              <CardContent>
                {valoresReferencia.map((valor, index) => (
                  <View key={index} style={[styles.referenceItem, { borderLeftColor: valor.cor }]}>
                    <Text style={styles.referenceTitle}>{valor.tipo}</Text>
                    <Text style={styles.referenceValue}>{valor.valor}</Text>
                  </View>
                ))}
              </CardContent>
            </Card>
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
  bcgAlert: {
    marginHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.md,
    backgroundColor: theme.colors.info[50],
    borderColor: theme.colors.info[200],
  },
  alertTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.info[700],
    marginBottom: theme.spacing.xs,
  },
  alertText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.info[600],
    lineHeight: 20,
  },
  boldText: {
    fontWeight: '600',
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
  strategyItem: {
    borderLeftWidth: 4,
    borderLeftColor: '#14b8a6',
    paddingLeft: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  strategyTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    marginBottom: theme.spacing.xs,
  },
  strategyDescription: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
    marginBottom: theme.spacing.sm,
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
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#14b8a6',
    marginTop: 6,
  },
  benefitText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.foreground,
    flex: 1,
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.primary + '20',
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.sm,
  },
  locationBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  locationText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.foreground,
    flex: 1,
  },
  momentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    padding: theme.spacing.sm,
    backgroundColor: '#f97316' + '20',
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.sm,
  },
  momentBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  momentText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.foreground,
    flex: 1,
  },
  responsibleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    padding: theme.spacing.sm,
    backgroundColor: '#a855f7' + '20',
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.sm,
  },
  responsibleText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.foreground,
    flex: 1,
  },
  implementationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.success + '20',
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.sm,
  },
  implementationBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  implementationText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.foreground,
    flex: 1,
  },
  metaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.sm,
  },
  metaIndicator: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    flex: 1,
  },
  referenceItem: {
    borderLeftWidth: 4,
    paddingLeft: theme.spacing.sm,
    paddingVertical: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  referenceTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    marginBottom: theme.spacing.xs,
  },
  referenceValue: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
  },
});