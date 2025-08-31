import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { router } from "expo-router";
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
  AlertDescription,
} from "@/components/ui";
import {
  ArrowLeft,
  Stethoscope,
  Clock,
  Users,
  MapPin,
  Activity,
  Calculator,
  Heart,
  Shield,
} from "lucide-react-native";
import { theme } from "@/styles/theme";

export default function TratamentoPage() {
  const esquemasBasicos = [
    {
      tipo: "Adultos/Adolescentes (≥10 anos)",
      esquema: "2RHZE/4RH",
      duracao: "6 meses",
      faseIntensiva: "2 meses (RHZE)",
      manutencao: "4 meses (RH)",
      indicacao: "Maioria das formas clínicas",
    },
    {
      tipo: "Crianças (<10 anos)",
      esquema: "2RHZ/4RH",
      duracao: "6 meses",
      faseIntensiva: "2 meses (RHZ)",
      manutencao: "4 meses (RH)",
      indicacao: "Maioria das formas clínicas",
    },
    {
      tipo: "TB Meningoencefálica/Osteoarticular (Adultos)",
      esquema: "2RHZE/10RH",
      duracao: "12 meses",
      faseIntensiva: "2 meses (RHZE)",
      manutencao: "10 meses (RH)",
      indicacao: "Formas graves do SNC e ossos",
    },
    {
      tipo: "TB Meningoencefálica/Osteoarticular (Crianças)",
      esquema: "2RHZ/10RH",
      duracao: "12 meses",
      faseIntensiva: "2 meses (RHZ)",
      manutencao: "10 meses (RH)",
      indicacao: "Formas graves do SNC e ossos",
    },
  ];

  const esquemasTBDR = [
    {
      tipo: "TB Multidrogarresistente (MDR)",
      duracao: "18-24 meses",
      faseIntensiva: "6-8 meses",
      manutencao: "12-16 meses",
      medicamentos: "Pelo menos 4 fármacos efetivos",
      criterio:
        "2 culturas negativas (intensiva), 3 culturas negativas (manutenção)",
    },
    {
      tipo: "TB Extensivamente Resistente (XDR)",
      duracao: "18-24 meses",
      faseIntensiva: "6-8 meses",
      manutencao: "12-16 meses",
      medicamentos: "Pelo menos 5 fármacos efetivos",
      criterio: "Conversão após 6º mês = 24 meses total",
    },
  ];

  const esquemaILTB = [
    {
      esquema: "6H",
      medicamento: "Isoniazida",
      duracao: "6 meses",
      doses: "180 doses",
      periodo: "6-9 meses",
    },
    {
      esquema: "9H",
      medicamento: "Isoniazida",
      duracao: "9 meses",
      doses: "270 doses",
      periodo: "9-12 meses",
    },
    {
      esquema: "4R",
      medicamento: "Rifampicina",
      duracao: "4 meses",
      doses: "120 doses",
      periodo: "4-6 meses",
    },
    {
      esquema: "3HP",
      medicamento: "Rifapentina + Isoniazida",
      duracao: "3 meses",
      doses: "12 doses semanais",
      periodo: "12-15 semanas",
    },
  ];

  const locaisTratamento = [
    {
      local: "Atenção Básica (ESF/UBS)",
      papel: "Coordenadora do cuidado",
      casos: "TB sensível, TDO, seguimento",
      caracteristicas: [
        "Principal porta de entrada",
        "Integralidade do cuidado",
        "TDO domiciliar/unidade",
      ],
    },
    {
      local: "Atenção Secundária",
      papel: "Casos especiais",
      casos: "Efeitos adversos maiores, comorbidades",
      caracteristicas: [
        "Elucidação diagnóstica",
        "Esquemas especiais",
        "Manejo de complicações",
      ],
    },
    {
      local: "Atenção Terciária",
      papel: "Alta complexidade",
      casos: "TB drogarresistente, esquemas individualizados",
      caracteristicas: [
        "Equipe multidisciplinar",
        "Recursos especializados",
        "Casos complexos",
      ],
    },
    {
      local: "Hospitalização",
      papel: "Casos graves",
      casos: "TB meningoencefálica, hepatotoxicidade grave",
      caracteristicas: [
        "Intolerância incontrolável",
        "RN <2kg",
        "Comprometimento geral",
      ],
    },
  ];

  const modalidadesTDO = [
    {
      modalidade: "Domiciliar",
      local: "Casa do paciente",
      responsavel: "ACS, enfermeiro",
      vantagens: "Maior adesão, vínculo familiar",
    },
    {
      modalidade: "Unidade de Saúde",
      local: "ESF, UBS, SAE",
      responsavel: "Equipe de saúde",
      vantagens: "Controle direto, facilidade logística",
    },
    {
      modalidade: "Compartilhado",
      local: "Consulta em um local, TDO em outro",
      responsavel: "Equipes coordenadas",
      vantagens: "Flexibilidade, proximidade",
    },
    {
      modalidade: "Institucional",
      local: "Prisões, albergues, asilos",
      responsavel: "Profissionais capacitados",
      vantagens: "Supervisão constante",
    },
  ];

  const monitoramentoCronico = [
    {
      parametro: "Bacteriológico",
      frequencia: "2º, 4º, 5º, 6º meses",
      objetivo: "Negativação baciloscopia/cultura",
      criterio: "Falência se positiva no 4º mês ou final",
    },
    {
      parametro: "Clínico",
      frequencia: "Mensal (crianças), todas consultas",
      objetivo: "Evolução clínica, adesão",
      criterio: "Melhora sintomas, ganho peso",
    },
    {
      parametro: "Radiológico",
      frequencia: "A critério clínico",
      objetivo: "Evolução radiológica",
      criterio: "Melhora lesões, redução cavidades",
    },
    {
      parametro: "Laboratorial",
      frequencia: "Início + critério clínico",
      objetivo: "Função hepática/renal",
      criterio: "TGO/TGP <3x LSN, creatinina normal",
    },
  ];

  const dosagensEspeciais = [
    {
      medicamento: "Isoniazida (máxima)",
      dose: "300mg/dia",
      populacao: "Crianças e adultos",
    },
    {
      medicamento: "Capreomicina (acumulada)",
      dose: "120g total",
      populacao: "TB DR (dose máxima)",
    },
    {
      medicamento: "Piridoxina",
      dose: "50-100mg/dia",
      populacao: "Prevenção neuropatia",
    },
    {
      medicamento: "TDO (fase intensiva)",
      dose: "24 doses",
      populacao: "Esquema 6 meses",
    },
    {
      medicamento: "TDO (manutenção)",
      dose: "48 doses",
      populacao: "Esquema 6 meses",
    },
  ];

  const criteriosLaboratoriais = [
    {
      exame: "TGO/TGP",
      normal: "<3x LSN",
      alterado: "≥3x LSN + sintomas",
      grave: "≥5x LSN sem sintomas",
      acao: "Suspensão temporária",
    },
    {
      exame: "Clearance creatinina",
      normal: ">30ml/min",
      alterado: "10-30ml/min",
      grave: "<10ml/min",
      acao: "Ajuste de doses",
    },
    {
      exame: "CD4+ (PVHIV)",
      normal: "≥50 céls/mm³",
      alterado: "<50 céls/mm³",
      grave: "Muito baixo",
      acao: "TARV na 2ª semana",
    },
    {
      exame: "Prova Tuberculínica",
      normal: "<5mm",
      alterado: "≥5mm",
      grave: "Conversão ≥10mm",
      acao: "Investigar ILTB",
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
            <Stethoscope size={24} color={theme.colors.success} />
            <Text style={styles.title}>Sobre o Tratamento</Text>
          </View>
          <Text style={styles.subtitle}>
            Esquemas terapêuticos e manejo da tuberculose
          </Text>
        </View>
      </View>

      <Tabs defaultValue="esquemas" style={styles.tabs}>
        <TabsList style={styles.tabsList}>
          <TabsTrigger value="esquemas" style={styles.tabsTrigger}>
            <Text style={styles.tabText}>Esquemas</Text>
          </TabsTrigger>
          <TabsTrigger value="locais" style={styles.tabsTrigger}>
            <Text style={styles.tabText}>Onde/Como</Text>
          </TabsTrigger>
          <TabsTrigger value="monitoramento" style={styles.tabsTrigger}>
            <Text style={styles.tabText}>Monitoramento</Text>
          </TabsTrigger>
          <TabsTrigger value="criterios" style={styles.tabsTrigger}>
            <Text style={styles.tabText}>Critérios</Text>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="esquemas">
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <Alert style={styles.alert}>
              <Heart
                size={20}
                color={theme.colors.primary}
              />
              <AlertDescription>
                A tuberculose é curável na maioria dos casos. O tratamento
                adequado interrompe a transmissão em 2-3 semanas e reduz o risco
                de recidiva. A adesão é fundamental para o sucesso.
              </AlertDescription>
            </Alert>

            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <Stethoscope size={20} color={theme.colors.success} />
                  <Text style={styles.cardTitleText}>
                    Esquemas Básicos (TB Sensível)
                  </Text>
                </CardTitle>
                <CardDescription>
                  Tratamento padronizado para tuberculose sensível
                </CardDescription>
              </CardHeader>
              <CardContent>
                {esquemasBasicos.map((esquema, index) => (
                  <View key={index} style={styles.schemeItem}>
                    <View style={styles.schemeHeader}>
                      <Text style={styles.schemeType}>{esquema.tipo}</Text>
                      <Badge variant="outline" style={styles.badge}>
                        <Text style={styles.badgeText}>{esquema.duracao}</Text>
                      </Badge>
                    </View>
                    <View style={styles.schemeGrid}>
                      <View style={styles.schemeColumn}>
                        <Text
                          style={[
                            styles.schemeLabel,
                            { color: theme.colors.success },
                          ]}
                        >
                          Esquema
                        </Text>
                        <Text style={styles.schemeValue}>
                          {esquema.esquema}
                        </Text>
                      </View>
                      <View style={styles.schemeColumn}>
                        <Text
                          style={[
                            styles.schemeLabel,
                            { color: theme.colors.primary },
                          ]}
                        >
                          Fase Intensiva
                        </Text>
                        <Text style={styles.schemeValue}>
                          {esquema.faseIntensiva}
                        </Text>
                      </View>
                      <View style={styles.schemeColumn}>
                        <Text
                          style={[
                            styles.schemeLabel,
                            {
                              color: "#f59e0b",
                            },
                          ]}
                        >
                          Manutenção
                        </Text>
                        <Text style={styles.schemeValue}>
                          {esquema.manutencao}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.separator} />
                    <Text style={styles.schemeIndication}>
                      {esquema.indicacao}
                    </Text>
                  </View>
                ))}
              </CardContent>
            </Card>

            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <Activity
                    size={20}
                    color="#ef4444"
                  />
                  <Text style={styles.cardTitleText}>
                    Esquemas para TB Drogarresistente
                  </Text>
                </CardTitle>
                <CardDescription>
                  Tratamento para tuberculose resistente a medicamentos
                </CardDescription>
              </CardHeader>
              <CardContent>
                {esquemasTBDR.map((esquema, index) => (
                  <View key={index} style={styles.tbdrItem}>
                    <View style={styles.schemeHeader}>
                      <Text style={styles.schemeType}>{esquema.tipo}</Text>
                      <Badge variant="destructive" style={styles.badge}>
                        <Text
                          style={[
                            styles.badgeText,
                            { color: theme.colors.background },
                          ]}
                        >
                          {esquema.duracao}
                        </Text>
                      </Badge>
                    </View>
                    <View style={styles.tbdrGrid}>
                      <View>
                        <Text style={styles.tbdrLabel}>
                          Fase Intensiva: {esquema.faseIntensiva}
                        </Text>
                        <Text style={styles.tbdrLabel}>
                          Manutenção: {esquema.manutencao}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.schemeValue}>
                          {esquema.medicamentos}
                        </Text>
                        <Text style={styles.schemeValue}>
                          {esquema.criterio}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </CardContent>
            </Card>

            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <Shield size={20} color={theme.colors.primary} />
                  <Text style={styles.cardTitleText}>Esquemas para ILTB</Text>
                </CardTitle>
                <CardDescription>
                  Tratamento da Infecção Latente por TB (reduz risco em 60-90%)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <View style={styles.iltbGrid}>
                  {esquemaILTB.map((esquema, index) => (
                    <View key={index} style={styles.iltbItem}>
                      <View style={styles.schemeHeader}>
                        <Text style={styles.schemeType}>{esquema.esquema}</Text>
                        <Badge variant="secondary" style={styles.badge}>
                          <Text style={styles.badgeText}>
                            {esquema.duracao}
                          </Text>
                        </Badge>
                      </View>
                      <Text style={styles.schemeValue}>
                        {esquema.medicamento}
                      </Text>
                      <Text style={styles.iltbDetails}>
                        {esquema.doses} • {esquema.periodo}
                      </Text>
                    </View>
                  ))}
                </View>
              </CardContent>
            </Card>
          </ScrollView>
        </TabsContent>

        <TabsContent value="locais">
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <MapPin size={20} color={theme.colors.primary} />
                  <Text style={styles.cardTitleText}>Locais de Tratamento</Text>
                </CardTitle>
                <CardDescription>
                  Onde o tratamento é realizado conforme complexidade
                </CardDescription>
              </CardHeader>
              <CardContent>
                {locaisTratamento.map((local, index) => (
                  <View key={index} style={styles.locationItem}>
                    <View style={styles.locationHeader}>
                      <View>
                        <Text style={styles.locationName}>{local.local}</Text>
                        <Text style={styles.locationRole}>{local.papel}</Text>
                      </View>
                      <Badge variant="outline" style={styles.badge}>
                        <Text style={styles.badgeText}>{local.casos}</Text>
                      </Badge>
                    </View>
                    <View style={styles.characteristicsContainer}>
                      {local.caracteristicas.map((carac, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          style={styles.characteristicBadge}
                        >
                          <Text style={styles.characteristicText}>{carac}</Text>
                        </Badge>
                      ))}
                    </View>
                  </View>
                ))}
              </CardContent>
            </Card>

            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <Users
                    size={20}
                    color="#f59e0b"
                  />
                  <Text style={styles.cardTitleText}>Modalidades do TDO</Text>
                </CardTitle>
                <CardDescription>
                  Tratamento Diretamente Observado - idealmente diário, mínimo
                  3x/semana
                </CardDescription>
              </CardHeader>
              <CardContent>
                <View style={styles.tdoGrid}>
                  {modalidadesTDO.map((modalidade, index) => (
                    <View key={index} style={styles.tdoItem}>
                      <Text style={styles.tdoTitle}>
                        {modalidade.modalidade}
                      </Text>
                      <Text style={styles.tdoLocation}>{modalidade.local}</Text>
                      <Text style={styles.tdoResponsible}>
                        <Text style={styles.tdoLabel}>Responsável:</Text>{" "}
                        {modalidade.responsavel}
                      </Text>
                      <Badge variant="outline" style={styles.badge}>
                        <Text style={styles.badgeText}>
                          {modalidade.vantagens}
                        </Text>
                      </Badge>
                    </View>
                  ))}
                </View>
              </CardContent>
            </Card>

            <Alert style={styles.alert}>
              <Activity
                size={20}
                color={theme.colors.primary}
              />
              <AlertDescription>
                <Text style={styles.alertBold}>Importante:</Text> O TDO melhora
                significativamente as taxas de cura e reduz o abandono. É
                especialmente importante em PVHIV, onde demonstrou maior
                eficácia.
              </AlertDescription>
            </Alert>
          </ScrollView>
        </TabsContent>

        <TabsContent value="monitoramento">
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <Clock size={20} color={theme.colors.success} />
                  <Text style={styles.cardTitleText}>
                    Cronograma de Monitoramento
                  </Text>
                </CardTitle>
                <CardDescription>
                  Acompanhamento sistemático durante o tratamento
                </CardDescription>
              </CardHeader>
              <CardContent>
                {monitoramentoCronico.map((item, index) => (
                  <View key={index} style={styles.monitoringItem}>
                    <View style={styles.monitoringHeader}>
                      <Text style={styles.monitoringParameter}>
                        {item.parametro}
                      </Text>
                      <Badge variant="outline" style={styles.badge}>
                        <Text style={styles.badgeText}>{item.frequencia}</Text>
                      </Badge>
                    </View>
                    <Text style={styles.monitoringObjective}>
                      <Text style={styles.monitoringLabel}>Objetivo:</Text>{" "}
                      {item.objetivo}
                    </Text>
                    <Text style={styles.monitoringCriteria}>
                      {item.criterio}
                    </Text>
                  </View>
                ))}
              </CardContent>
            </Card>

            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <Calculator size={20} color={theme.colors.primary} />
                  <Text style={styles.cardTitleText}>Dosagens Especiais</Text>
                </CardTitle>
                <CardDescription>
                  Doses específicas e limites importantes
                </CardDescription>
              </CardHeader>
              <CardContent>
                {dosagensEspeciais.map((item, index) => (
                  <View key={index} style={styles.dosageItem}>
                    <View>
                      <Text style={styles.dosageMedication}>
                        {item.medicamento}
                      </Text>
                      <Text style={styles.dosagePopulation}>
                        {item.populacao}
                      </Text>
                    </View>
                    <Badge variant="outline" style={styles.badge}>
                      <Text style={styles.badgeText}>{item.dose}</Text>
                    </Badge>
                  </View>
                ))}
              </CardContent>
            </Card>
          </ScrollView>
        </TabsContent>

        <TabsContent value="criterios">
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <Calculator size={20} color={theme.colors.primary} />
                  <Text style={styles.cardTitleText}>
                    Critérios Laboratoriais
                  </Text>
                </CardTitle>
                <CardDescription>
                  Valores de referência para tomada de decisões
                </CardDescription>
              </CardHeader>
              <CardContent>
                {criteriosLaboratoriais.map((criterio, index) => (
                  <View key={index} style={styles.criteriaItem}>
                    <Text style={styles.criteriaExam}>{criterio.exame}</Text>
                    <View style={styles.criteriaGrid}>
                      <View
                        style={[styles.criteriaColumn, styles.normalColumn]}
                      >
                        <Text style={styles.criteriaColumnTitle}>Normal</Text>
                        <Text style={styles.criteriaValue}>
                          {criterio.normal}
                        </Text>
                      </View>
                      <View
                        style={[styles.criteriaColumn, styles.alteredColumn]}
                      >
                        <Text style={styles.criteriaColumnTitle}>Alterado</Text>
                        <Text style={styles.criteriaValue}>
                          {criterio.alterado}
                        </Text>
                      </View>
                      <View style={[styles.criteriaColumn, styles.graveColumn]}>
                        <Text style={styles.criteriaColumnTitle}>Grave</Text>
                        <Text style={styles.criteriaValue}>
                          {criterio.grave}
                        </Text>
                      </View>
                      <View
                        style={[styles.criteriaColumn, styles.actionColumn]}
                      >
                        <Text style={styles.criteriaColumnTitle}>Ação</Text>
                        <Text style={styles.criteriaValue}>
                          {criterio.acao}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </CardContent>
            </Card>

            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <Shield size={20} color={theme.colors.success} />
                  <Text style={styles.cardTitleText}>Critérios de Sucesso</Text>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <View style={styles.successCriteria}>
                  <View
                    style={[
                      styles.successItem,
                      { borderLeftColor: theme.colors.success },
                    ]}
                  >
                    <Text style={styles.successTitle}>Cura Bacteriológica</Text>
                    <Text style={styles.successDescription}>
                      Negativação da baciloscopia no 2º mês e manutenção até o
                      final
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.successItem,
                      { borderLeftColor: theme.colors.primary },
                    ]}
                  >
                    <Text style={styles.successTitle}>TB Drogarresistente</Text>
                    <Text style={styles.successDescription}>
                      2 culturas negativas (fase intensiva) + 3 culturas
                      negativas (manutenção)
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.successItem,
                      {
                        borderLeftColor: "#f59e0b",
                      },
                    ]}
                  >
                    <Text style={styles.successTitle}>Adesão ao TDO</Text>
                    <Text style={styles.successDescription}>
                      Mínimo 3x/semana, idealmente diário
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.successItem,
                      {
                        borderLeftColor: "#f59e0b",
                      },
                    ]}
                  >
                    <Text style={styles.successTitle}>ILTB</Text>
                    <Text style={styles.successDescription}>
                      Completar 180-270 doses (H) ou 120 doses (R) ou 12 doses
                      (3HP)
                    </Text>
                  </View>
                </View>
              </CardContent>
            </Card>

            <Alert style={styles.alert}>
              <Stethoscope
                size={20}
                color={theme.colors.primary}
              />
              <AlertDescription>
                <Text style={styles.alertBold}>Lembre-se:</Text> O uso irregular
                dos medicamentos pode levar à amplificação da resistência e
                falha terapêutica. A busca ativa de faltosos deve ser instituída
                precocemente.
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
  } as ViewStyle,
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing.md,
    paddingTop: theme.spacing.xl,
    backgroundColor: theme.colors.background,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  } as ViewStyle,
  backButton: {
    padding: theme.spacing.sm,
    marginRight: theme.spacing.sm,
  } as ViewStyle,
  headerContent: {
    flex: 1,
  } as ViewStyle,
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
  } as ViewStyle,
  title: {
    fontSize: theme.fontSize.xl,
    fontWeight: "700",
    color: theme.colors.foreground,
  },
  subtitle: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
    marginTop: theme.spacing.xs,
  },
  tabs: {
    flex: 1,
  } as ViewStyle,
  tabsList: {
    flexDirection: "row",
    backgroundColor: theme.colors.muted.DEFAULT,
    margin: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.xs,
  } as ViewStyle,
  tabsTrigger: {
    flex: 1,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  tabText: {
    fontSize: theme.fontSize.sm,
    fontWeight: "500",
    color: theme.colors.muted.foreground,
  },
  scrollView: {
    flex: 1,
    padding: theme.spacing.md,
  } as ViewStyle,
  card: {
    marginBottom: theme.spacing.md,
  } as ViewStyle,
  cardTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  cardTitleText: {
    fontSize: theme.fontSize.lg,
    fontWeight: "600",
    color: theme.colors.foreground,
  },
  alert: {
    marginBottom: theme.spacing.md,
  },
  alertBold: {
    fontWeight: "600",
  },
  schemeItem: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  schemeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: theme.spacing.sm,
  },
  schemeType: {
    fontSize: theme.fontSize.sm,
    fontWeight: "600",
    color: theme.colors.foreground,
    flex: 1,
    marginRight: theme.spacing.sm,
  },
  badge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
  },
  badgeText: {
    fontSize: theme.fontSize.xs,
    fontWeight: "500",
  },
  schemeGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: theme.spacing.sm,
  },
  schemeColumn: {
    flex: 1,
    minWidth: 100,
  },
  schemeLabel: {
    fontSize: theme.fontSize.sm,
    fontWeight: "600",
    marginBottom: theme.spacing.xs,
  },
  schemeValue: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
  },
  separator: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.sm,
  },
  schemeIndication: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
  },
  tbdrItem: {
    borderLeftWidth: 4,
    borderLeftColor: "#ef4444",
    paddingLeft: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  } as ViewStyle,
  tbdrGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: theme.spacing.sm,
  },
  tbdrLabel: {
    fontSize: theme.fontSize.sm,
    fontWeight: "600",
    color: theme.colors.foreground,
  },
  iltbGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing.md,
  },
  iltbItem: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.sm,
    flex: 1,
    minWidth: "45%",
  },
  iltbDetails: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted.foreground,
    marginTop: theme.spacing.xs,
  },
  locationItem: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  locationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: theme.spacing.sm,
  },
  locationName: {
    fontSize: theme.fontSize.sm,
    fontWeight: "600",
    color: theme.colors.foreground,
  },
  locationRole: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
  },
  characteristicsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing.sm,
  },
  characteristicBadge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
  },
  characteristicText: {
    fontSize: theme.fontSize.xs,
    fontWeight: "500",
  },
  tdoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing.md,
  },
  tdoItem: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.sm,
    flex: 1,
    minWidth: "45%",
  },
  tdoTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: "600",
    color: theme.colors.foreground,
    marginBottom: theme.spacing.xs,
  },
  tdoLocation: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
    marginBottom: theme.spacing.xs,
  },
  tdoResponsible: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted.foreground,
    marginBottom: theme.spacing.sm,
  },
  tdoLabel: {
    fontWeight: "600",
  },
  monitoringItem: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  monitoringHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: theme.spacing.sm,
  },
  monitoringParameter: {
    fontSize: theme.fontSize.sm,
    fontWeight: "600",
    color: theme.colors.foreground,
  },
  monitoringObjective: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
    marginBottom: theme.spacing.xs,
  },
  monitoringLabel: {
    fontWeight: "600",
  },
  monitoringCriteria: {
    fontSize: theme.fontSize.sm,
    fontWeight: "600",
    color: theme.colors.success,
  },
  dosageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.sm,
  },
  dosageMedication: {
    fontSize: theme.fontSize.sm,
    fontWeight: "600",
    color: theme.colors.foreground,
  },
  dosagePopulation: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted.foreground,
  },
  criteriaItem: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  criteriaExam: {
    fontSize: theme.fontSize.sm,
    fontWeight: "600",
    color: theme.colors.foreground,
    marginBottom: theme.spacing.sm,
  },
  criteriaGrid: {
    flexDirection: "row",
    gap: theme.spacing.xs,
  },
  criteriaColumn: {
    flex: 1,
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    alignItems: "center",
  },
  normalColumn: {
    backgroundColor: theme.colors.success + "20",
  } as ViewStyle,
  alteredColumn: {
    backgroundColor: "#f59e0b" + "20",
  } as ViewStyle,
  graveColumn: {
    backgroundColor: "#ef4444" + "20",
  } as ViewStyle,
  actionColumn: {
    backgroundColor: theme.colors.primary + "20",
  } as ViewStyle,
  criteriaColumnTitle: {
    fontSize: theme.fontSize.xs,
    fontWeight: "600",
    marginBottom: theme.spacing.xs,
  },
  criteriaValue: {
    fontSize: theme.fontSize.xs,
    textAlign: "center",
  },
  successCriteria: {
    gap: theme.spacing.sm,
  },
  successItem: {
    borderLeftWidth: 4,
    paddingLeft: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
  } as ViewStyle,
  successTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: "600",
    color: theme.colors.foreground,
    marginBottom: theme.spacing.xs,
  },
  successDescription: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
  },
});
