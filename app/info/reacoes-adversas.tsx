import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { Badge } from '@/components/ui/Badge';
import { Alert, AlertDescription } from '@/components/ui/Alert';
import { Progress } from '@/components/ui/Progress';
// import { Separator } from '@/components/ui/separator';
import { 
  AlertTriangle, 
  Shield, 
  Users, 
  Activity, 
  Clock, 
  Stethoscope, 
  Calculator 
} from 'lucide-react-native';

export default function ReacoesAdversasScreen() {
  const reacoesMenores = [
    {
      reacao: "Mudança da coloração da urina",
      frequencia: "Universal",
      descricao: "Urina alaranjada/avermelhada (Rifampicina)",
      manejo: "Orientação ao paciente, sem necessidade de intervenção",
    },
    {
      reacao: "Intolerância digestiva",
      frequencia: "40%",
      descricao: "Náusea, vômito, epigastralgia",
      manejo: "Reformular horário, tomar com alimentos, sintomáticos",
    },
    {
      reacao: "Alterações cutâneas",
      frequencia: "20%",
      descricao: "Prurido, exantema leve",
      manejo: "Anti-histamínicos, hidratação da pele",
    },
    {
      reacao: "Icterícia leve",
      frequencia: "15%",
      descricao: "Amarelamento leve de pele/mucosas",
      manejo: "Monitoramento, avaliar função hepática",
    },
    {
      reacao: "Dores articulares",
      frequencia: "4%",
      descricao: "Artralgia, principalmente grandes articulações",
      manejo: "Anti-inflamatórios, analgésicos",
    },
    {
      reacao: "Neuropatia periférica",
      frequencia: "Comum",
      descricao: "Formigamento, dormência (Isoniazida)",
      manejo: "Piridoxina 50-200mg/dia",
    },
  ];

  const reacoesMaiores = [
    {
      reacao: "Hepatite medicamentosa",
      gravidade: "Grave",
      descricao: "Elevação significativa de enzimas hepáticas",
      criterio: "TGO/TGP ≥3x LSN com sintomas ou ≥5x LSN sem sintomas",
      manejo: "Suspensão imediata, reintrodução criteriosa",
    },
    {
      reacao: "Hipersensibilidade grave",
      gravidade: "Grave",
      descricao: "Exantema extenso, anafilaxia",
      criterio: "Reação cutânea extensa ou sistêmica",
      manejo: "Suspensão definitiva do fármaco responsável",
    },
    {
      reacao: "Trombocitopenia",
      gravidade: "Moderada",
      descricao: "Redução significativa de plaquetas",
      criterio: "Plaquetas <100.000/mm³",
      manejo: "Suspensão, monitoramento hematológico",
    },
    {
      reacao: "Sintomas psicóticos",
      gravidade: "Grave",
      descricao: "Alucinações, delírios, depressão grave",
      criterio: "Alterações comportamentais significativas",
      manejo: "Suspensão 1-4 semanas, antipsicóticos/antidepressivos",
    },
    {
      reacao: "Acidose lática",
      gravidade: "Grave",
      descricao: "Complicação metabólica (Linezolida)",
      criterio: "Lactato elevado com sintomas",
      manejo: "Suspensão imediata, suporte intensivo",
    },
    {
      reacao: "Distúrbios eletrolíticos",
      gravidade: "Moderada",
      descricao: "Hipopotassemia, hipomagnesemia",
      criterio: "Alterações laboratoriais significativas",
      manejo: "Reposição eletrolítica, monitoramento",
    },
  ];

  const fatoresRisco = [
    {
      fator: "Idade",
      criterio: "≥40 anos (quarta década)",
      risco: "Alto",
      cuidados: "Monitoramento mais frequente",
    },
    {
      fator: "Uso de álcool",
      criterio: ">80g/dia",
      risco: "Muito Alto",
      cuidados: "Função hepática semanal",
    },
    {
      fator: "Desnutrição",
      criterio: "Perda >15% do peso",
      risco: "Alto",
      cuidados: "Suporte nutricional, doses ajustadas",
    },
    {
      fator: "Doença hepática prévia",
      criterio: "História de hepatopatia",
      risco: "Muito Alto",
      cuidados: "Esquemas alternativos, monitoramento intensivo",
    },
    {
      fator: "HIV avançado",
      criterio: "Imunossupressão grave",
      risco: "Muito Alto",
      cuidados: "Manejo conjunto TB-HIV, piridoxina obrigatória",
    },
  ];

  const estrategiasManejo = {
    menores: [
      "Orientação ao paciente sobre normalidade de alguns efeitos",
      "Reformulação do horário de administração",
      "Uso de medicação sintomática (anti-histamínicos, analgésicos)",
      "Piridoxina para neuropatia periférica",
      "Orientações dietéticas",
      "Manutenção do esquema básico",
    ],
    maiores: [
      "Suspensão imediata do(s) fármaco(s) responsável(is)",
      "Reintrodução criteriosa após melhora clínica/laboratorial",
      "Substituição por esquema especial se necessário",
      "Medicação de suporte (antipsicóticos, antidepressivos)",
      "Encaminhamento para unidade de referência",
      "Notificação à Anvisa (VigiMed)",
    ],
  };

  const frequenciasReacoes = [
    { tipo: "Reações Maiores (Geral)", frequencia: 3, max: 8 },
    { tipo: "Interrupção Definitiva (TB DR)", frequencia: 1, max: 2 },
    { tipo: "Intolerância Digestiva", frequencia: 40, max: 40 },
    { tipo: "Alterações Cutâneas", frequencia: 20, max: 20 },
    { tipo: "Icterícia", frequencia: 15, max: 15 },
    { tipo: "Dores Articulares", frequencia: 4, max: 4 },
  ];

  const dosagensEspeciais = [
    {
      medicamento: "Piridoxina (padrão)",
      dose: "50mg/dia",
      indicacao: "Prevenção de neuropatia",
    },
    {
      medicamento: "Piridoxina (com ARVs)",
      dose: "até 200mg/dia",
      indicacao: "PVHIV com risco aumentado",
    },
    {
      medicamento: "Critério reintrodução",
      dose: "<3x LSN",
      indicacao: "Enzimas hepáticas para retomar tratamento",
    },
    {
      medicamento: "Álcool (fator risco)",
      dose: ">80g/dia",
      indicacao: "Critério para alto risco hepatotoxicidade",
    },
  ];

  const monitoramentoEspecial = [
    {
      parametro: "Função Hepática",
      frequencia: "Mensal ou mais frequente",
      grupos: "Usuários de álcool, hepatopatas",
      acao: "Suspensão se TGO/TGP ≥3x LSN + sintomas",
    },
    {
      parametro: "Hemograma",
      frequencia: "Mensal",
      grupos: "TB DR, PVHIV",
      acao: "Avaliar citopenias",
    },
    {
      parametro: "Função Renal",
      frequencia: "Mensal",
      grupos: "Uso de aminoglicosídeos",
      acao: "Ajuste de doses se necessário",
    },
    {
      parametro: "Avaliação Neurológica",
      frequencia: "A cada consulta",
      grupos: "Uso de Isoniazida, Linezolida",
      acao: "Piridoxina se neuropatia",
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <AlertTriangle size={24} color="#f59e0b" />
          <Text style={styles.title}>Reações Adversas</Text>
        </View>
        <Text style={styles.subtitle}>
          Efeitos indesejáveis dos medicamentos antiTB
        </Text>
      </View>

      <Tabs defaultValue="tipos" style={styles.tabs}>
        <TabsList style={styles.tabsList}>
          <TabsTrigger value="tipos" style={styles.tabsTrigger}>
            <Text style={styles.tabsText}>Tipos</Text>
          </TabsTrigger>
          <TabsTrigger value="fatores" style={styles.tabsTrigger}>
            <Text style={styles.tabsText}>Fatores de Risco</Text>
          </TabsTrigger>
          <TabsTrigger value="manejo" style={styles.tabsTrigger}>
            <Text style={styles.tabsText}>Manejo</Text>
          </TabsTrigger>
          <TabsTrigger value="monitoramento" style={styles.tabsTrigger}>
            <Text style={styles.tabsText}>Monitoramento</Text>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tipos" style={styles.tabsContent}>
          <Alert style={styles.alert}>
            <AlertTriangle size={16} color="#f59e0b" />
            <AlertDescription style={styles.alertDescription}>
              As reações adversas são classificadas em "menores" (não requerem suspensão) e "maiores" (podem requerer
              suspensão). A frequência de reações maiores varia de 3% a 8%.
            </AlertDescription>
          </Alert>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Shield size={20} color="#10b981" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Reações Menores
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Geralmente não requerem suspensão do tratamento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.reacoesContainer}>
                {reacoesMenores.map((reacao, index) => (
                  <View key={index} style={[styles.reacaoItem, { borderLeftColor: '#10b981' }]}>
                    <View style={styles.reacaoHeader}>
                      <Text style={styles.reacaoName}>{reacao.reacao}</Text>
                      <Badge variant="secondary" style={styles.frequenciaBadge}>
                        <Text style={styles.frequenciaText}>{reacao.frequencia}</Text>
                      </Badge>
                    </View>
                    <Text style={styles.descricaoText}>{reacao.descricao}</Text>
                    <Text style={[styles.manejoText, { color: '#059669' }]}>{reacao.manejo}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <AlertTriangle size={20} color="#ef4444" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Reações Maiores
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Frequência: 3-8% | Podem requerer suspensão do tratamento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.reacoesContainer}>
                {reacoesMaiores.map((reacao, index) => (
                  <View key={index} style={[styles.reacaoItem, { borderLeftColor: '#ef4444' }]}>
                    <View style={styles.reacaoHeader}>
                      <Text style={styles.reacaoName}>{reacao.reacao}</Text>
                      <Badge 
                        variant={reacao.gravidade === "Grave" ? "destructive" : "default"} 
                        style={styles.gravidadeBadge}
                      >
                        <Text style={
                          reacao.gravidade === "Grave" ? styles.badgeDestructiveText : styles.badgeText
                        }>
                          {reacao.gravidade}
                        </Text>
                      </Badge>
                    </View>
                    <Text style={styles.descricaoText}>{reacao.descricao}</Text>
                    <Text style={styles.criterioText}>
                      <Text style={styles.boldText}>Critério:</Text> {reacao.criterio}
                    </Text>
                    <Text style={[styles.manejoText, { color: '#dc2626' }]}>{reacao.manejo}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={[styles.cardTitleText, { fontSize: 16 }]}>Frequência das Reações Adversas</CardTitle>
              <CardDescription style={styles.cardDescription}>
                Distribuição percentual dos principais efeitos adversos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.frequenciasContainer}>
                {frequenciasReacoes.map((item, index) => (
                  <View key={index} style={styles.frequenciaItem}>
                    <View style={styles.frequenciaHeader}>
                      <Text style={styles.frequenciaTipo}>{item.tipo}</Text>
                      <Text style={styles.frequenciaValor}>
                        {item.frequencia}
                        {item.max !== item.frequencia && `-${item.max}`}%
                      </Text>
                    </View>
                    <Progress value={item.max} style={styles.progressBar} />
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fatores" style={styles.tabsContent}>
          <Alert style={styles.alert}>
            <Users size={16} color="#6366f1" />
            <AlertDescription style={styles.alertDescription}>
              Alguns grupos apresentam maior risco para reações adversas maiores. PVHIV têm maior ocorrência e gravidade
              de reações adversas.
            </AlertDescription>
          </Alert>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Users size={20} color="#a855f7" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Fatores de Risco para Reações Maiores
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Condições que aumentam o risco de reações adversas graves
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.fatoresContainer}>
                {fatoresRisco.map((fator, index) => (
                  <View key={index} style={styles.fatorItem}>
                    <View style={styles.fatorHeader}>
                      <Text style={styles.fatorTitulo}>{fator.fator}</Text>
                      <Badge
                        variant={
                          fator.risco === "Muito Alto"
                            ? "destructive"
                            : fator.risco === "Alto"
                              ? "default"
                              : "secondary"
                        }
                        style={styles.riscoBadge}
                      >
                        <Text style={
                          fator.risco === "Muito Alto" 
                            ? styles.badgeDestructiveText 
                            : styles.badgeText
                        }>
                          {fator.risco}
                        </Text>
                      </Badge>
                    </View>
                    <Text style={styles.criterioFatorText}>
                      <Text style={styles.boldText}>Critério:</Text> {fator.criterio}
                    </Text>
                    {/* <Separator style={styles.separator} /> */}
                    <Text style={[styles.cuidadosText, { color: '#7c3aed' }]}>{fator.cuidados}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={[styles.cardTitleText, { fontSize: 16 }]}>Populações Especiais</CardTitle>
            </CardHeader>
            <CardContent>
              <View style={styles.populacoesEspeciaisContainer}>
                <View style={[styles.populacaoItem, { borderLeftColor: '#dc2626' }]}>
                  <Text style={styles.populacaoTitulo}>PVHIV</Text>
                  <Text style={styles.populacaoDescricao}>
                    Maior frequência e gravidade de reações. Sobreposição com efeitos dos ARVs
                  </Text>
                </View>
                <View style={[styles.populacaoItem, { borderLeftColor: '#f59e0b' }]}>
                  <Text style={styles.populacaoTitulo}>Gestantes</Text>
                  <Text style={styles.populacaoDescricao}>
                    Evitar Amicacina, Estreptomicina, Etionamida (toxicidade fetal)
                  </Text>
                </View>
                <View style={[styles.populacaoItem, { borderLeftColor: '#3b82f6' }]}>
                  <Text style={styles.populacaoTitulo}>TB Drogarresistente</Text>
                  <Text style={styles.populacaoDescricao}>
                    Alta frequência de reações, mas apenas 1-2% necessitam interrupção definitiva
                  </Text>
                </View>
              </View>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manejo" style={styles.tabsContent}>
          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitleText}>Estratégias de Manejo</CardTitle>
              <CardDescription style={styles.cardDescription}>
                Abordagens diferenciadas para reações menores e maiores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.estrategiasContainer}>
                <View style={styles.estrategiaSecao}>
                  <View style={styles.estrategiaTituloContainer}>
                    <Shield size={16} color="#10b981" />
                    <Text style={[styles.estrategiaTitulo, { color: '#059669' }]}>
                      Reações Menores
                    </Text>
                  </View>
                  <View style={styles.estrategiaLista}>
                    {estrategiasManejo.menores.map((estrategia, index) => (
                      <View key={index} style={styles.estrategiaItem}>
                        <View style={[styles.bullet, { backgroundColor: '#10b981' }]} />
                        <Text style={styles.estrategiaTexto}>{estrategia}</Text>
                      </View>
                    ))}
                  </View>
                </View>
                <View style={styles.estrategiaSecao}>
                  <View style={styles.estrategiaTituloContainer}>
                    <AlertTriangle size={16} color="#dc2626" />
                    <Text style={[styles.estrategiaTitulo, { color: '#dc2626' }]}>
                      Reações Maiores
                    </Text>
                  </View>
                  <View style={styles.estrategiaLista}>
                    {estrategiasManejo.maiores.map((estrategia, index) => (
                      <View key={index} style={styles.estrategiaItem}>
                        <View style={[styles.bullet, { backgroundColor: '#dc2626' }]} />
                        <Text style={styles.estrategiaTexto}>{estrategia}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={[styles.cardTitleText, { fontSize: 16 }]}>Dosagens Especiais</CardTitle>
              <CardDescription style={styles.cardDescription}>
                Doses e critérios específicos para manejo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.dosagensContainer}>
                {dosagensEspeciais.map((item, index) => (
                  <View key={index} style={styles.dosagemItem}>
                    <View style={styles.dosagemInfo}>
                      <Text style={styles.dosagemMedicamento}>{item.medicamento}</Text>
                      <Text style={styles.dosagemIndicacao}>{item.indicacao}</Text>
                    </View>
                    <Badge variant="outline" style={styles.doseBadge}>
                      <Text style={styles.doseText}>{item.dose}</Text>
                    </Badge>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Alert style={styles.alert}>
            <Stethoscope size={16} color="#059669" />
            <AlertDescription style={styles.alertDescription}>
              <Text style={styles.boldText}>Importante:</Text> Reações adversas aos medicamentos antiTB devem ser notificadas à Anvisa pelo
              sistema VigiMed. Reações maiores requerem encaminhamento para unidades de referência.
            </AlertDescription>
          </Alert>
        </TabsContent>

        <TabsContent value="monitoramento" style={styles.tabsContent}>
          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Activity size={20} color="#3b82f6" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Monitoramento Laboratorial
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Parâmetros e frequências para acompanhamento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.monitoramentoContainer}>
                {monitoramentoEspecial.map((item, index) => (
                  <View key={index} style={styles.monitoramentoItem}>
                    <View style={styles.monitoramentoHeader}>
                      <Text style={styles.monitoramentoTitulo}>{item.parametro}</Text>
                      <Badge variant="outline" style={styles.frequenciaBadge}>
                        <Text style={styles.frequenciaText}>{item.frequencia}</Text>
                      </Badge>
                    </View>
                    <Text style={styles.grupoText}>
                      <Text style={styles.boldText}>Grupos prioritários:</Text> {item.grupos}
                    </Text>
                    {/* <Separator style={styles.separator} /> */}
                    <Text style={[styles.acaoText, { color: '#2563eb' }]}>{item.acao}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Clock size={20} color="#10b981" />
                <Text style={[styles.cardTitleText, { marginLeft: 8, fontSize: 16 }]}>
                  Momentos Críticos
                </Text>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <View style={styles.momentosCriticosContainer}>
                <View style={[styles.momentoCritico, { borderLeftColor: '#10b981' }]}>
                  <Text style={styles.momentoTitulo}>Início do Tratamento</Text>
                  <Text style={styles.momentoDescricao}>Período de maior ocorrência de reações adversas</Text>
                </View>
                <View style={[styles.momentoCritico, { borderLeftColor: '#3b82f6' }]}>
                  <Text style={styles.momentoTitulo}>Consultas Mensais</Text>
                  <Text style={styles.momentoDescricao}>Avaliação sistemática de efeitos adversos</Text>
                </View>
                <View style={[styles.momentoCritico, { borderLeftColor: '#f59e0b' }]}>
                  <Text style={styles.momentoTitulo}>Reintrodução de Medicamentos</Text>
                  <Text style={styles.momentoDescricao}>Após suspensão por reação maior</Text>
                </View>
                <View style={[styles.momentoCritico, { borderLeftColor: '#a855f7' }]}>
                  <Text style={styles.momentoTitulo}>TB Drogarresistente</Text>
                  <Text style={styles.momentoDescricao}>Monitoramento mais intensivo devido à complexidade</Text>
                </View>
              </View>
            </CardContent>
          </Card>

          <Alert style={styles.alert}>
            <Calculator size={16} color="#3b82f6" />
            <AlertDescription style={styles.alertDescription}>
              <Text style={styles.boldText}>Critério para reintrodução:</Text> Enzimas hepáticas menores que 3x o limite superior da
              normalidade. Suspensão para sintomas psiquiátricos: 1-4 semanas.
            </AlertDescription>
          </Alert>
        </TabsContent>
      </Tabs>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  contentContainer: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#1e293b',
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
  },
  tabs: {
    flex: 1,
  },
  tabsList: {
    marginBottom: 16,
  },
  tabsTrigger: {
    flex: 1,
  },
  tabsText: {
    fontSize: 12,
    fontWeight: '500',
  },
  tabsContent: {
    flex: 1,
  },
  alert: {
    marginBottom: 16,
  },
  alertDescription: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },
  card: {
    marginBottom: 16,
  },
  cardTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  cardDescription: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  reacoesContainer: {
    gap: 16,
  },
  reacaoItem: {
    borderLeftWidth: 4,
    paddingLeft: 16,
    paddingVertical: 12,
    backgroundColor: '#f8fafc',
    borderRadius: 8,
  },
  reacaoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  reacaoName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    flex: 1,
  },
  frequenciaBadge: {
    marginLeft: 8,
  },
  frequenciaText: {
    fontSize: 12,
    color: '#475569',
  },
  gravidadeBadge: {
    marginLeft: 8,
  },
  badgeText: {
    fontSize: 12,
    color: '#475569',
  },
  badgeDestructiveText: {
    fontSize: 12,
    color: '#ffffff',
  },
  descricaoText: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  criterioText: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 8,
  },
  boldText: {
    fontWeight: '600',
    color: '#1e293b',
  },
  manejoText: {
    fontSize: 14,
    fontWeight: '500',
  },
  frequenciasContainer: {
    gap: 16,
  },
  frequenciaItem: {
    gap: 8,
  },
  frequenciaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  frequenciaTipo: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
  },
  frequenciaValor: {
    fontSize: 14,
    color: '#64748b',
  },
  progressBar: {
    height: 8,
  },
  fatoresContainer: {
    gap: 16,
  },
  fatorItem: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 16,
  },
  fatorHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  fatorTitulo: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    flex: 1,
  },
  riscoBadge: {
    marginLeft: 8,
  },
  criterioFatorText: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  separator: {
    marginVertical: 8,
  },
  cuidadosText: {
    fontSize: 14,
    fontWeight: '500',
  },
  populacoesEspeciaisContainer: {
    gap: 12,
  },
  populacaoItem: {
    borderLeftWidth: 4,
    paddingLeft: 12,
  },
  populacaoTitulo: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
  },
  populacaoDescricao: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
  estrategiasContainer: {
    gap: 24,
  },
  estrategiaSecao: {
    flex: 1,
  },
  estrategiaTituloContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  estrategiaTitulo: {
    fontSize: 14,
    fontWeight: '600',
  },
  estrategiaLista: {
    gap: 8,
  },
  estrategiaItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 6,
  },
  estrategiaTexto: {
    fontSize: 14,
    color: '#64748b',
    flex: 1,
    lineHeight: 20,
  },
  dosagensContainer: {
    gap: 12,
  },
  dosagemItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
  },
  dosagemInfo: {
    flex: 1,
  },
  dosagemMedicamento: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
  },
  dosagemIndicacao: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
  },
  doseBadge: {
    marginLeft: 12,
  },
  doseText: {
    fontSize: 12,
    color: '#475569',
    fontWeight: '600',
  },
  monitoramentoContainer: {
    gap: 16,
  },
  monitoramentoItem: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 16,
  },
  monitoramentoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  monitoramentoTitulo: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    flex: 1,
  },
  grupoText: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  acaoText: {
    fontSize: 14,
    fontWeight: '500',
  },
  momentosCriticosContainer: {
    gap: 12,
  },
  momentoCritico: {
    borderLeftWidth: 4,
    paddingLeft: 12,
  },
  momentoTitulo: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
  },
  momentoDescricao: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
});