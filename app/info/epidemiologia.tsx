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
  AlertDescription,
  Progress
} from '@/components/ui';
import {
  ArrowLeft,
  BarChart3,
  TrendingDown,
  MapPin,
  Users,
  Globe,
  Target,
  AlertTriangle,
  Activity,
  Calendar,
  ArrowUp,
  ArrowDown,
  Minus,
} from 'lucide-react-native';
import { theme } from '@/styles/theme';

export default function EpidemiologiaPage() {
  const dadosNacionais2023 = {
    incidencia: {
      valor: 32.0,
      unidade: "casos/100.000 hab",
      tendencia: "estavel",
      variacao: -2.1,
      meta2030: 20.0,
    },
    mortalidade: {
      valor: 2.2,
      unidade: "óbitos/100.000 hab",
      tendencia: "declinio",
      variacao: -5.8,
      meta2030: 1.3,
    },
    coinfeccaoHIV: {
      valor: 8.5,
      unidade: "% dos casos TB",
      tendencia: "estavel",
      variacao: 0.2,
      meta2030: 5.0,
    },
    tbDR: {
      valor: 1.8,
      unidade: "% casos novos",
      tendencia: "aumento",
      variacao: 12.5,
      meta2030: 1.0,
    },
  };

  const dadosRegionais = [
    {
      regiao: "Norte",
      incidencia: 45.2,
      mortalidade: 3.1,
      hivPositivo: 12.8,
      ranking: 1,
      tendencia: "aumento",
      principais: ["Amazonas: 67.8", "Roraima: 52.3", "Acre: 48.9"],
    },
    {
      regiao: "Nordeste",
      incidencia: 38.7,
      mortalidade: 2.8,
      hivPositivo: 7.2,
      ranking: 2,
      tendencia: "estavel",
      principais: ["Pernambuco: 47.1", "Ceará: 42.3", "Bahia: 35.6"],
    },
    {
      regiao: "Sudeste",
      incidencia: 28.4,
      mortalidade: 1.9,
      hivPositivo: 9.1,
      ranking: 4,
      tendencia: "declinio",
      principais: ["Rio de Janeiro: 52.8", "São Paulo: 24.7", "Espírito Santo: 23.1"],
    },
    {
      regiao: "Sul",
      incidencia: 24.1,
      mortalidade: 1.6,
      hivPositivo: 15.3,
      ranking: 5,
      tendencia: "declinio",
      principais: ["Rio Grande do Sul: 32.1", "Santa Catarina: 19.8", "Paraná: 20.4"],
    },
    {
      regiao: "Centro-Oeste",
      incidencia: 29.8,
      mortalidade: 2.1,
      hivPositivo: 8.9,
      ranking: 3,
      tendencia: "estavel",
      principais: ["Mato Grosso do Sul: 35.2", "Mato Grosso: 28.7", "Goiás: 26.1"],
    },
  ];

  const tendenciasHistoricas = [
    { ano: 2014, incidencia: 42.7, mortalidade: 2.8, coinfeccao: 9.2 },
    { ano: 2015, incidencia: 41.5, mortalidade: 2.7, coinfeccao: 9.0 },
    { ano: 2016, incidencia: 40.2, mortalidade: 2.6, coinfeccao: 8.8 },
    { ano: 2017, incidencia: 38.9, mortalidade: 2.5, coinfeccao: 8.6 },
    { ano: 2018, incidencia: 37.1, mortalidade: 2.4, coinfeccao: 8.4 },
    { ano: 2019, incidencia: 35.8, mortalidade: 2.3, coinfeccao: 8.2 },
    { ano: 2020, incidencia: 34.2, mortalidade: 2.2, coinfeccao: 8.0 },
    { ano: 2021, incidencia: 33.5, mortalidade: 2.3, coinfeccao: 8.3 },
    { ano: 2022, incidencia: 32.7, mortalidade: 2.3, coinfeccao: 8.3 },
    { ano: 2023, incidencia: 32.0, mortalidade: 2.2, coinfeccao: 8.5 },
  ];

  const indicadoresControle = [
    {
      indicador: "Taxa de Cura",
      valor: 73.2,
      meta: 90.0,
      status: "inadequado",
      descricao: "Percentual de casos novos curados",
      tendencia: "melhora",
    },
    {
      indicador: "Taxa de Abandono",
      valor: 11.8,
      meta: 5.0,
      status: "inadequado",
      descricao: "Percentual de casos que abandonaram tratamento",
      tendencia: "piora",
    },
    {
      indicador: "Taxa de Óbito",
      valor: 8.1,
      meta: 3.0,
      status: "inadequado",
      descricao: "Percentual de óbitos por TB",
      tendencia: "estavel",
    },
    {
      indicador: "Detecção de Casos",
      valor: 82.5,
      meta: 90.0,
      status: "adequado",
      descricao: "Percentual de casos estimados detectados",
      tendencia: "melhora",
    },
    {
      indicador: "Teste HIV",
      valor: 76.3,
      meta: 100.0,
      status: "inadequado",
      descricao: "Percentual de casos TB testados para HIV",
      tendencia: "melhora",
    },
    {
      indicador: "Cultura Realizada",
      valor: 68.4,
      meta: 100.0,
      status: "inadequado",
      descricao: "Percentual de casos com cultura solicitada",
      tendencia: "melhora",
    },
  ];

  const populacoesVulneraveis = [
    {
      populacao: "População em Situação de Rua",
      incidencia: 1890.0,
      risco: "59x maior",
      caracteristicas: ["Desnutrição", "Alcoolismo", "Dificuldade de acesso"],
      intervencoes: ["Busca ativa", "TDO adaptado", "Apoio social"],
    },
    {
      populacao: "População Privada de Liberdade",
      incidencia: 932.0,
      risco: "29x maior",
      caracteristicas: ["Superlotação", "Ventilação inadequada", "Imunossupressão"],
      intervencoes: ["Rastreamento sistemático", "Isolamento adequado", "Tratamento supervisionado"],
    },
    {
      populacao: "Povos Indígenas",
      incidencia: 143.2,
      risco: "4.5x maior",
      caracteristicas: ["Determinantes sociais", "Acesso limitado", "Fatores genéticos"],
      intervencoes: ["Atenção diferenciada", "Capacitação local", "Respeito cultural"],
    },
    {
      populacao: "PVHIV",
      incidencia: 1250.0,
      risco: "39x maior",
      caracteristicas: ["Imunossupressão", "Formas atípicas", "Maior mortalidade"],
      intervencoes: ["Rastreamento regular", "Profilaxia ILTB", "Manejo conjunto"],
    },
  ];

  const determinantesSociais = [
    {
      determinante: "Pobreza",
      impacto: "Alto",
      descricao: "Renda familiar <1 salário mínimo",
      rr: 3.2,
      intervencoes: ["Programas sociais", "Transferência de renda", "Apoio nutricional"],
    },
    {
      determinante: "Baixa Escolaridade",
      impacto: "Moderado",
      descricao: "Menos de 8 anos de estudo",
      rr: 2.1,
      intervencoes: ["Educação em saúde", "Materiais adaptados", "Comunicação clara"],
    },
    {
      determinante: "Aglomeração Domiciliar",
      impacto: "Alto",
      descricao: ">3 pessoas por cômodo",
      rr: 2.8,
      intervencoes: ["Melhoria habitacional", "Ventilação adequada", "Controle de contatos"],
    },
    {
      determinante: "Desnutrição",
      impacto: "Alto",
      descricao: "IMC <18.5 kg/m²",
      rr: 3.5,
      intervencoes: ["Suporte nutricional", "Suplementação", "Acompanhamento"],
    },
    {
      determinante: "Alcoolismo",
      impacto: "Alto",
      descricao: "Uso abusivo de álcool",
      rr: 4.1,
      intervencoes: ["Tratamento dependência", "Apoio psicossocial", "TDO adaptado"],
    },
  ];

  const metasEndTB = [
    {
      meta: "Redução da Incidência",
      baseline2015: 42.7,
      meta2025: 26.0,
      meta2030: 20.0,
      meta2035: 10.0,
      atual2023: 32.0,
      progresso: 65.2,
      status: "em_progresso",
    },
    {
      meta: "Redução da Mortalidade",
      baseline2015: 2.7,
      meta2025: 1.8,
      meta2030: 1.3,
      meta2035: 0.7,
      atual2023: 2.2,
      progresso: 55.6,
      status: "em_progresso",
    },
    {
      meta: "Eliminação de Gastos Catastróficos",
      baseline2015: 45.0,
      meta2025: 20.0,
      meta2030: 0.0,
      meta2035: 0.0,
      atual2023: 28.0,
      progresso: 68.0,
      status: "em_progresso",
    },
  ];

  const comparacaoInternacional = [
    { pais: "Brasil", incidencia: 32.0, mortalidade: 2.2, posicao: 20 },
    { pais: "Índia", incidencia: 199.0, mortalidade: 27.0, posicao: 1 },
    { pais: "Indonésia", incidencia: 354.0, mortalidade: 38.0, posicao: 2 },
    { pais: "China", incidencia: 55.0, mortalidade: 3.4, posicao: 3 },
    { pais: "Filipinas", incidencia: 650.0, mortalidade: 29.0, posicao: 4 },
    { pais: "Paquistão", incidencia: 610.0, mortalidade: 27.0, posicao: 5 },
    { pais: "África do Sul", incidencia: 513.0, mortalidade: 63.0, posicao: 6 },
    { pais: "Argentina", incidencia: 24.0, mortalidade: 1.1, posicao: 35 },
    { pais: "Chile", incidencia: 14.0, mortalidade: 0.8, posicao: 45 },
    { pais: "Uruguai", incidencia: 21.0, mortalidade: 0.9, posicao: 38 },
  ];

  const getTendenciaIcon = (tendencia: string) => {
    switch (tendencia) {
      case "aumento":
        return <ArrowUp size={16} color="#ef4444" />;
      case "declinio":
        return <ArrowDown size={16} color="#10b981" />;
      default:
        return <Minus size={16} color="#f59e0b" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "adequado":
        return { backgroundColor: '#10b98120', borderColor: '#10b981', textColor: '#065f46' };
      case "inadequado":
        return { backgroundColor: '#ef444420', borderColor: '#ef4444', textColor: '#991b1b' };
      default:
        return { backgroundColor: '#f59e0b20', borderColor: '#f59e0b', textColor: '#92400e' };
    }
  };

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
            <BarChart3 size={24} color={theme.colors.primary} />
            <Text style={styles.title}>Epidemiologia da Tuberculose</Text>
          </View>
          <Text style={styles.subtitle}>Dados epidemiológicos e contexto no Brasil</Text>
        </View>
      </View>

      <Tabs defaultValue="nacional" style={styles.tabs}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsListContainer}>
          <View style={styles.tabsList}>
            <TabsTrigger value="nacional" style={styles.tabsTrigger}>
              <Text style={styles.tabText}>Nacional</Text>
            </TabsTrigger>
            <TabsTrigger value="regional" style={styles.tabsTrigger}>
              <Text style={styles.tabText}>Regional</Text>
            </TabsTrigger>
            <TabsTrigger value="tendencias" style={styles.tabsTrigger}>
              <Text style={styles.tabText}>Tendências</Text>
            </TabsTrigger>
            <TabsTrigger value="indicadores" style={styles.tabsTrigger}>
              <Text style={styles.tabText}>Indicadores</Text>
            </TabsTrigger>
            <TabsTrigger value="contexto" style={styles.tabsTrigger}>
              <Text style={styles.tabText}>Contexto</Text>
            </TabsTrigger>
          </View>
        </ScrollView>

        <TabsContent value="nacional">
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Alert style={styles.alert}>
              <BarChart3 size={20} color={theme.colors.primary} />
              <AlertDescription>
                O Brasil ocupa a 20ª posição mundial em carga de tuberculose, com aproximadamente 70.000 casos novos
                anuais. Dados referentes ao ano de 2023.
              </AlertDescription>
            </Alert>

            <View style={styles.nationalDataGrid}>
              {Object.entries(dadosNacionais2023).map(([key, data]) => (
                <Card key={key} style={styles.dataCard}>
                  <CardHeader>
                    <View style={styles.cardHeader}>
                      <Text style={styles.cardIndicatorTitle}>
                        {key === "coinfeccaoHIV" ? "Coinfecção TB-HIV" : key === "tbDR" ? "TB Drogarresistente" : key}
                      </Text>
                      {getTendenciaIcon(data.tendencia)}
                    </View>
                  </CardHeader>
                  <CardContent>
                    <Text style={styles.dataValue}>{data.valor}</Text>
                    <Text style={styles.dataUnit}>{data.unidade}</Text>
                    <View style={styles.variationContainer}>
                      <Text style={[
                        styles.variationText,
                        { 
                          color: data.variacao > 0 ? "#ef4444" : data.variacao < 0 ? "#10b981" : "#f59e0b"
                        }
                      ]}>
                        {data.variacao > 0 ? "+" : ""}{data.variacao}%
                      </Text>
                      <Text style={styles.variationLabel}>vs 2022</Text>
                    </View>
                    <View style={styles.separator} />
                    <View style={styles.metaContainer}>
                      <Text style={styles.metaLabel}>Meta 2030: </Text>
                      <Text style={styles.metaValue}>{data.meta2030}</Text>
                    </View>
                  </CardContent>
                </Card>
              ))}
            </View>

            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <Globe size={20} color={theme.colors.primary} />
                  <Text style={styles.cardTitleText}>Comparação Internacional</Text>
                </CardTitle>
                <CardDescription>Posição do Brasil entre os países com maior carga de TB</CardDescription>
              </CardHeader>
              <CardContent>
                {comparacaoInternacional.map((pais, index) => (
                  <View 
                    key={pais.pais} 
                    style={[
                      styles.countryItem,
                      pais.pais === "Brasil" && styles.brazilHighlight
                    ]}
                  >
                    <View style={styles.countryInfo}>
                      <Badge variant="outline" style={styles.positionBadge}>
                        <Text style={styles.positionText}>{pais.posicao}</Text>
                      </Badge>
                      <Text style={[
                        styles.countryName,
                        pais.pais === "Brasil" && { color: theme.colors.primary }
                      ]}>
                        {pais.pais}
                      </Text>
                    </View>
                    <View style={styles.countryStats}>
                      <Text style={styles.countryStatText}>Incidência: {pais.incidencia}/100k</Text>
                      <Text style={styles.countryStatSubtext}>Mortalidade: {pais.mortalidade}/100k</Text>
                    </View>
                  </View>
                ))}
              </CardContent>
            </Card>

            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <Target size={20} color={theme.colors.success} />
                  <Text style={styles.cardTitleText}>Metas da Estratégia End TB</Text>
                </CardTitle>
                <CardDescription>Progresso em direção às metas globais</CardDescription>
              </CardHeader>
              <CardContent>
                {metasEndTB.map((meta, index) => (
                  <View key={index} style={styles.goalContainer}>
                    <View style={styles.goalHeader}>
                      <Text style={styles.goalTitle}>{meta.meta}</Text>
                      <Badge variant="outline" style={styles.badge}>
                        <Text style={styles.badgeText}>{meta.progresso.toFixed(1)}% progresso</Text>
                      </Badge>
                    </View>
                    <Progress value={meta.progresso} style={styles.goalProgress} />
                    <View style={styles.goalTimeline}>
                      <View style={styles.timelineItem}>
                        <Text style={styles.timelineYear}>2015</Text>
                        <Text style={styles.timelineValue}>{meta.baseline2015}</Text>
                      </View>
                      <View style={styles.timelineItem}>
                        <Text style={styles.timelineYear}>2023</Text>
                        <Text style={[styles.timelineValue, { color: theme.colors.primary }]}>{meta.atual2023}</Text>
                      </View>
                      <View style={styles.timelineItem}>
                        <Text style={styles.timelineYear}>2025</Text>
                        <Text style={styles.timelineValue}>{meta.meta2025}</Text>
                      </View>
                      <View style={styles.timelineItem}>
                        <Text style={styles.timelineYear}>2030</Text>
                        <Text style={styles.timelineValue}>{meta.meta2030}</Text>
                      </View>
                      <View style={styles.timelineItem}>
                        <Text style={styles.timelineYear}>2035</Text>
                        <Text style={styles.timelineValue}>{meta.meta2035}</Text>
                      </View>
                    </View>
                  </View>
                ))}
              </CardContent>
            </Card>
          </ScrollView>
        </TabsContent>

        <TabsContent value="regional">
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <MapPin size={20} color="#a855f7" />
                  <Text style={styles.cardTitleText}>Dados por Região</Text>
                </CardTitle>
                <CardDescription>Incidência e mortalidade por tuberculose nas regiões brasileiras</CardDescription>
              </CardHeader>
              <CardContent>
                {dadosRegionais.map((regiao, index) => (
                  <View key={index} style={styles.regionContainer}>
                    <View style={styles.regionHeader}>
                      <View>
                        <View style={styles.regionTitleContainer}>
                          <Text style={styles.regionTitle}>{regiao.regiao}</Text>
                          {getTendenciaIcon(regiao.tendencia)}
                        </View>
                        <Badge variant="outline" style={styles.rankingBadge}>
                          <Text style={styles.badgeText}>{regiao.ranking}ª posição nacional</Text>
                        </Badge>
                      </View>
                    </View>

                    <View style={styles.regionStatsGrid}>
                      <View style={styles.regionStatItem}>
                        <Text style={styles.regionStatValue}>{regiao.incidencia}</Text>
                        <Text style={styles.regionStatLabel}>Incidência/100k hab</Text>
                      </View>
                      <View style={[styles.regionStatItem, { backgroundColor: '#ef444420' }]}>
                        <Text style={[styles.regionStatValue, { color: '#dc2626' }]}>{regiao.mortalidade}</Text>
                        <Text style={[styles.regionStatLabel, { color: '#dc2626' }]}>Mortalidade/100k hab</Text>
                      </View>
                      <View style={[styles.regionStatItem, { backgroundColor: '#a855f720' }]}>
                        <Text style={[styles.regionStatValue, { color: '#9333ea' }]}>{regiao.hivPositivo}%</Text>
                        <Text style={[styles.regionStatLabel, { color: '#9333ea' }]}>Coinfecção TB-HIV</Text>
                      </View>
                    </View>

                    <View>
                      <Text style={styles.statesTitle}>Estados com maior incidência:</Text>
                      <View style={styles.statesContainer}>
                        {regiao.principais.map((estado, i) => (
                          <Badge key={i} variant="secondary" style={styles.stateBadge}>
                            <Text style={styles.stateText}>{estado}</Text>
                          </Badge>
                        ))}
                      </View>
                    </View>
                  </View>
                ))}
              </CardContent>
            </Card>

            <Alert style={styles.alert}>
              <MapPin size={20} color={theme.colors.primary} />
              <AlertDescription>
                <Text style={styles.alertBold}>Disparidades regionais:</Text> A região Norte apresenta incidência 88% maior que a região Sul,
                refletindo desigualdades socioeconômicas e de acesso aos serviços de saúde.
              </AlertDescription>
            </Alert>
          </ScrollView>
        </TabsContent>

        <TabsContent value="tendencias">
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <TrendingDown size={20} color={theme.colors.success} />
                  <Text style={styles.cardTitleText}>Tendências Históricas (2014-2023)</Text>
                </CardTitle>
                <CardDescription>Evolução dos principais indicadores epidemiológicos</CardDescription>
              </CardHeader>
              <CardContent>
                <View style={styles.trendsContainer}>
                  <Text style={styles.trendsTitle}>Incidência (casos/100.000 hab)</Text>
                  {tendenciasHistoricas.map((ano, index) => (
                    <View key={index} style={styles.trendItem}>
                      <Text style={styles.trendYear}>{ano.ano}</Text>
                      <View style={styles.trendBarContainer}>
                        <View style={styles.trendBarBackground}>
                          <View 
                            style={[
                              styles.trendBar,
                              { 
                                width: `${(ano.incidencia / 45) * 100}%`,
                                backgroundColor: theme.colors.primary
                              }
                            ]}
                          />
                        </View>
                        <Text style={styles.trendValue}>{ano.incidencia}</Text>
                      </View>
                    </View>
                  ))}
                </View>

                <View style={styles.separator} />

                <View style={styles.trendsContainer}>
                  <Text style={styles.trendsTitle}>Mortalidade (óbitos/100.000 hab)</Text>
                  {tendenciasHistoricas.map((ano, index) => (
                    <View key={index} style={styles.trendItem}>
                      <Text style={styles.trendYear}>{ano.ano}</Text>
                      <View style={styles.trendBarContainer}>
                        <View style={styles.trendBarBackground}>
                          <View 
                            style={[
                              styles.trendBar,
                              { 
                                width: `${(ano.mortalidade / 3) * 100}%`,
                                backgroundColor: '#ef4444'
                              }
                            ]}
                          />
                        </View>
                        <Text style={styles.trendValue}>{ano.mortalidade}</Text>
                      </View>
                    </View>
                  ))}
                </View>

                <View style={styles.separator} />

                <View style={styles.trendsContainer}>
                  <Text style={styles.trendsTitle}>Coinfecção TB-HIV (%)</Text>
                  {tendenciasHistoricas.map((ano, index) => (
                    <View key={index} style={styles.trendItem}>
                      <Text style={styles.trendYear}>{ano.ano}</Text>
                      <View style={styles.trendBarContainer}>
                        <View style={styles.trendBarBackground}>
                          <View 
                            style={[
                              styles.trendBar,
                              { 
                                width: `${(ano.coinfeccao / 10) * 100}%`,
                                backgroundColor: '#a855f7'
                              }
                            ]}
                          />
                        </View>
                        <Text style={styles.trendValue}>{ano.coinfeccao}</Text>
                      </View>
                    </View>
                  ))}
                </View>
              </CardContent>
            </Card>

            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitleText}>Análise de Tendências</CardTitle>
              </CardHeader>
              <CardContent>
                <View style={styles.analysisContainer}>
                  <View style={[styles.analysisItem, { borderLeftColor: theme.colors.success }]}>
                    <Text style={[styles.analysisTitle, { color: theme.colors.success }]}>Tendência Positiva</Text>
                    <Text style={styles.analysisText}>
                      Redução de 25% na incidência e 19% na mortalidade entre 2014-2023, demonstrando efetividade das
                      políticas de controle.
                    </Text>
                  </View>
                  <View style={[styles.analysisItem, { borderLeftColor: '#f59e0b' }]}>
                    <Text style={[styles.analysisTitle, { color: '#f59e0b' }]}>Desafio Persistente</Text>
                    <Text style={styles.analysisText}>
                      Coinfecção TB-HIV mantém-se estável, indicando necessidade de estratégias integradas mais efetivas.
                    </Text>
                  </View>
                  <View style={[styles.analysisItem, { borderLeftColor: '#ef4444' }]}>
                    <Text style={[styles.analysisTitle, { color: '#ef4444' }]}>Impacto COVID-19</Text>
                    <Text style={styles.analysisText}>
                      Aumento da mortalidade em 2021-2022 possivelmente relacionado à pandemia e redução do acesso aos
                      serviços.
                    </Text>
                  </View>
                </View>
              </CardContent>
            </Card>
          </ScrollView>
        </TabsContent>

        <TabsContent value="indicadores">
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <Activity size={20} color="#f97316" />
                  <Text style={styles.cardTitleText}>Indicadores de Controle</Text>
                </CardTitle>
                <CardDescription>Monitoramento da qualidade dos serviços de TB</CardDescription>
              </CardHeader>
              <CardContent>
                {indicadoresControle.map((indicador, index) => (
                  <View key={index} style={styles.indicatorContainer}>
                    <View style={styles.indicatorHeader}>
                      <View>
                        <Text style={styles.indicatorTitle}>{indicador.indicador}</Text>
                        <Text style={styles.indicatorDescription}>{indicador.descricao}</Text>
                      </View>
                      <View style={styles.indicatorStatus}>
                        <View style={[
                          styles.statusBadge,
                          {
                            backgroundColor: getStatusColor(indicador.status).backgroundColor,
                            borderColor: getStatusColor(indicador.status).borderColor,
                          }
                        ]}>
                          <Text style={[
                            styles.statusText,
                            { color: getStatusColor(indicador.status).textColor }
                          ]}>
                            {indicador.status}
                          </Text>
                        </View>
                        <View style={styles.tendencyContainer}>
                          {getTendenciaIcon(indicador.tendencia)}
                          <Text style={styles.tendencyText}>{indicador.tendencia}</Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.indicatorProgress}>
                      <View style={styles.progressLabels}>
                        <Text style={styles.progressLabel}>Atual: {indicador.valor}%</Text>
                        <Text style={styles.progressLabel}>Meta: {indicador.meta}%</Text>
                      </View>
                      <Progress value={(indicador.valor / indicador.meta) * 100} style={styles.progressBar} />
                      <Text style={styles.progressNote}>
                        {indicador.valor >= indicador.meta
                          ? "Meta atingida"
                          : `Faltam ${(indicador.meta - indicador.valor).toFixed(1)} pontos percentuais`}
                      </Text>
                    </View>
                  </View>
                ))}
              </CardContent>
            </Card>

            <Alert style={styles.alert}>
              <Target size={20} color={theme.colors.primary} />
              <AlertDescription>
                <Text style={styles.alertBold}>Desafios principais:</Text> Taxa de cura abaixo da meta (73% vs 90%) e alta taxa de abandono
                (12% vs 5%) são os principais obstáculos para o controle efetivo da TB no Brasil.
              </AlertDescription>
            </Alert>
          </ScrollView>
        </TabsContent>

        <TabsContent value="contexto">
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <Users size={20} color="#ef4444" />
                  <Text style={styles.cardTitleText}>Populações Vulneráveis</Text>
                </CardTitle>
                <CardDescription>Grupos com maior risco de adoecimento por TB</CardDescription>
              </CardHeader>
              <CardContent>
                {populacoesVulneraveis.map((pop, index) => (
                  <View key={index} style={styles.vulnerablePopContainer}>
                    <View style={styles.vulnerablePopHeader}>
                      <Text style={styles.vulnerablePopTitle}>{pop.populacao}</Text>
                      <View style={styles.vulnerablePopStats}>
                        <Badge variant="destructive" style={styles.riskBadge}>
                          <Text style={styles.riskText}>{pop.risco}</Text>
                        </Badge>
                        <Text style={styles.incidenceText}>{pop.incidencia}/100k</Text>
                      </View>
                    </View>

                    <View style={styles.vulnerablePopGrid}>
                      <View>
                        <Text style={styles.sectionTitle}>Características</Text>
                        {pop.caracteristicas.map((carac, i) => (
                          <View key={i} style={styles.listItem}>
                            <View style={styles.redBullet} />
                            <Text style={styles.listText}>{carac}</Text>
                          </View>
                        ))}
                      </View>
                      <View>
                        <Text style={styles.sectionTitle}>Intervenções</Text>
                        {pop.intervencoes.map((inter, i) => (
                          <View key={i} style={styles.listItem}>
                            <View style={styles.blueBullet} />
                            <Text style={styles.listText}>{inter}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  </View>
                ))}
              </CardContent>
            </Card>

            <Card style={styles.card}>
              <CardHeader>
                <CardTitle style={styles.cardTitle}>
                  <AlertTriangle size={20} color="#f59e0b" />
                  <Text style={styles.cardTitleText}>Determinantes Sociais</Text>
                </CardTitle>
                <CardDescription>Fatores socioeconômicos associados à TB</CardDescription>
              </CardHeader>
              <CardContent>
                {determinantesSociais.map((det, index) => (
                  <View key={index} style={styles.determinantContainer}>
                    <View style={styles.determinantHeader}>
                      <View>
                        <Text style={styles.determinantTitle}>{det.determinante}</Text>
                        <Text style={styles.determinantDescription}>{det.descricao}</Text>
                      </View>
                      <View style={styles.determinantStats}>
                        <Badge variant={det.impacto === "Alto" ? "destructive" : "secondary"} style={styles.impactBadge}>
                          <Text style={styles.impactText}>{det.impacto}</Text>
                        </Badge>
                        <Text style={styles.rrText}>RR: {det.rr}</Text>
                      </View>
                    </View>
                    <View style={styles.interventionsContainer}>
                      <Text style={styles.interventionsTitle}>Intervenções</Text>
                      <View style={styles.interventionsList}>
                        {det.intervencoes.map((inter, i) => (
                          <Badge key={i} variant="outline" style={styles.interventionBadge}>
                            <Text style={styles.interventionText}>{inter}</Text>
                          </Badge>
                        ))}
                      </View>
                    </View>
                  </View>
                ))}
              </CardContent>
            </Card>

            <Alert style={styles.alert}>
              <Calendar size={20} color={theme.colors.primary} />
              <AlertDescription>
                <Text style={styles.alertBold}>Abordagem integral:</Text> O controle efetivo da TB requer ações que vão além do setor saúde,
                incluindo políticas sociais, habitacionais e de redução da pobreza.
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
  tabsListContainer: {
    maxHeight: 50,
    marginHorizontal: theme.spacing.md,
    marginTop: theme.spacing.md,
  },
  tabsList: {
    flexDirection: 'row',
    backgroundColor: theme.colors.muted.DEFAULT,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.xs,
    gap: theme.spacing.xs,
  },
  tabsTrigger: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
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
  nationalDataGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  dataCard: {
    flex: 1,
    minWidth: '47%',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardIndicatorTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    textTransform: 'capitalize',
    flex: 1,
  },
  dataValue: {
    fontSize: theme.fontSize.xl,
    fontWeight: '700',
    color: theme.colors.foreground,
  },
  dataUnit: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted.foreground,
    marginBottom: theme.spacing.sm,
  },
  variationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  variationText: {
    fontSize: theme.fontSize.xs,
    fontWeight: '600',
  },
  variationLabel: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted.foreground,
  },
  separator: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.sm,
  },
  metaContainer: {
    flexDirection: 'row',
  },
  metaLabel: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted.foreground,
  },
  metaValue: {
    fontSize: theme.fontSize.xs,
    fontWeight: '600',
    color: theme.colors.foreground,
  },
  countryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
    backgroundColor: theme.colors.muted.DEFAULT,
    marginBottom: theme.spacing.sm,
  },
  brazilHighlight: {
    backgroundColor: theme.colors.primary + '20',
    borderWidth: 1,
    borderColor: theme.colors.primary + '40',
  },
  countryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  positionBadge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    minWidth: 32,
  },
  positionText: {
    fontSize: theme.fontSize.xs,
    fontWeight: '600',
    textAlign: 'center',
  },
  countryName: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
  },
  countryStats: {
    alignItems: 'flex-end',
  },
  countryStatText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.foreground,
  },
  countryStatSubtext: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
  },
  goalContainer: {
    marginBottom: theme.spacing.lg,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.sm,
  },
  goalTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    flex: 1,
  },
  badge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
  },
  badgeText: {
    fontSize: theme.fontSize.xs,
    fontWeight: '500',
  },
  goalProgress: {
    height: 8,
    marginBottom: theme.spacing.sm,
  },
  goalTimeline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timelineItem: {
    alignItems: 'center',
    flex: 1,
  },
  timelineYear: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted.foreground,
    marginBottom: theme.spacing.xs,
  },
  timelineValue: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
  },
  regionContainer: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  regionHeader: {
    marginBottom: theme.spacing.sm,
  },
  regionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  regionTitle: {
    fontSize: theme.fontSize.lg,
    fontWeight: '600',
    color: theme.colors.foreground,
  },
  rankingBadge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    alignSelf: 'flex-start',
  },
  regionStatsGrid: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  regionStatItem: {
    flex: 1,
    alignItems: 'center',
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.primary + '20',
    borderRadius: theme.borderRadius.lg,
  },
  regionStatValue: {
    fontSize: theme.fontSize.xl,
    fontWeight: '700',
    color: theme.colors.primary,
  },
  regionStatLabel: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.primary,
    textAlign: 'center',
    marginTop: theme.spacing.xs,
  },
  statesTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    marginBottom: theme.spacing.sm,
  },
  statesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  stateBadge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
  },
  stateText: {
    fontSize: theme.fontSize.xs,
    fontWeight: '500',
  },
  trendsContainer: {
    marginBottom: theme.spacing.lg,
  },
  trendsTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    marginBottom: theme.spacing.sm,
  },
  trendItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  trendYear: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.foreground,
    width: 50,
  },
  trendBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginLeft: theme.spacing.sm,
  },
  trendBarBackground: {
    flex: 1,
    height: 8,
    backgroundColor: theme.colors.muted.DEFAULT,
    borderRadius: 4,
  },
  trendBar: {
    height: 8,
    borderRadius: 4,
  },
  trendValue: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    width: 48,
    textAlign: 'right',
  },
  analysisContainer: {
    gap: theme.spacing.md,
  },
  analysisItem: {
    borderLeftWidth: 4,
    paddingLeft: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
  },
  analysisTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    marginBottom: theme.spacing.xs,
  },
  analysisText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
  },
  indicatorContainer: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  indicatorHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.sm,
  },
  indicatorTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
  },
  indicatorDescription: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted.foreground,
    marginTop: theme.spacing.xs,
  },
  indicatorStatus: {
    alignItems: 'flex-end',
  },
  statusBadge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    marginBottom: theme.spacing.xs,
  },
  statusText: {
    fontSize: theme.fontSize.xs,
    fontWeight: '600',
  },
  tendencyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  tendencyText: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted.foreground,
  },
  indicatorProgress: {
    gap: theme.spacing.sm,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabel: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.foreground,
  },
  progressBar: {
    height: 8,
  },
  progressNote: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted.foreground,
  },
  vulnerablePopContainer: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  vulnerablePopHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.sm,
  },
  vulnerablePopTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    flex: 1,
  },
  vulnerablePopStats: {
    alignItems: 'flex-end',
  },
  riskBadge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    marginBottom: theme.spacing.xs,
  },
  riskText: {
    fontSize: theme.fontSize.xs,
    fontWeight: '600',
    color: theme.colors.background,
  },
  incidenceText: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted.foreground,
  },
  vulnerablePopGrid: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  sectionTitle: {
    fontSize: theme.fontSize.xs,
    fontWeight: '600',
    marginBottom: theme.spacing.sm,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  redBullet: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#ef4444',
  },
  blueBullet: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.colors.primary,
  },
  listText: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.foreground,
    flex: 1,
  },
  determinantContainer: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  determinantHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.sm,
  },
  determinantTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
  },
  determinantDescription: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted.foreground,
    marginTop: theme.spacing.xs,
  },
  determinantStats: {
    alignItems: 'flex-end',
  },
  impactBadge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    marginBottom: theme.spacing.xs,
  },
  impactText: {
    fontSize: theme.fontSize.xs,
    fontWeight: '600',
  },
  rrText: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.foreground,
  },
  interventionsContainer: {
    marginTop: theme.spacing.sm,
  },
  interventionsTitle: {
    fontSize: theme.fontSize.xs,
    fontWeight: '600',
    color: theme.colors.success,
    marginBottom: theme.spacing.xs,
  },
  interventionsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.xs,
  },
  interventionBadge: {
    paddingHorizontal: theme.spacing.xs,
    paddingVertical: theme.spacing.xs / 2,
  },
  interventionText: {
    fontSize: theme.fontSize.xs,
    fontWeight: '500',
  },
});