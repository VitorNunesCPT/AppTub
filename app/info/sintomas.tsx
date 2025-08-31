import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import {
  ArrowLeft,
  Thermometer,
  Users,
  MapPin,
  Clock,
  Activity,
  Calculator,
  Stethoscope,
  AlertTriangle,
} from 'lucide-react-native';

import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  Badge,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Progress,
  Alert,
  AlertDescription
} from '@/components/ui';
import { theme } from '@/styles/theme';

export default function SintomasPage() {
  const router = useRouter();

  const sintomasClassicos = [
    {
      sintoma: "Tosse Persistente",
      descricao: "Seca ou produtiva, principal sintoma respiratório",
      duracao: "≥2-3 semanas (população geral)",
      observacao: "Qualquer duração em grupos de risco",
      frequencia: 85,
    },
    {
      sintoma: "Febre Vespertina",
      descricao: "Febre baixa, geralmente no final da tarde",
      duracao: "Persistente por semanas",
      observacao: "Pode ser o único sintoma em crianças",
      frequencia: 70,
    },
    {
      sintoma: "Sudorese Noturna",
      descricao: "Suor excessivo durante a noite",
      duracao: "Recorrente",
      observacao: "Independente da temperatura ambiente",
      frequencia: 65,
    },
    {
      sintoma: "Emagrecimento",
      descricao: "Perda de peso não intencional",
      duracao: "Progressiva",
      observacao: ">10% peso habitual (PVHIV = imunodeficiência avançada)",
      frequencia: 60,
    },
  ];

  const sintomasFormas = {
    primaria: [
      {
        sintoma: "Irritabilidade",
        descricao: "Mudanças comportamentais em crianças",
        especificidade: "Comum em crianças",
      },
      {
        sintoma: "Inapetência",
        descricao: "Perda do apetite, recusa alimentar",
        especificidade: "Pode ser sutil",
      },
      {
        sintoma: "Febre baixa",
        descricao: "Temperatura elevada discreta",
        especificidade: "Nem sempre presente",
      },
      {
        sintoma: "Tosse ausente/leve",
        descricao: "Tosse pode não estar presente",
        especificidade: "Diferente do adulto",
      },
    ],
    secundaria: [
      {
        sintoma: "Tosse produtiva",
        descricao: "Com expectoração, pode ter sangue",
        especificidade: "Mais comum em adultos",
      },
      {
        sintoma: "Dor torácica",
        descricao: "Dor no peito ao respirar ou tossir",
        especificidade: "Relacionada à inflamação",
      },
      {
        sintoma: "Dispneia",
        descricao: "Falta de ar, dificuldade respiratória",
        especificidade: "Em casos mais avançados",
      },
      {
        sintoma: "Hemoptise",
        descricao: "Sangue no escarro",
        especificidade: "Indica lesão pulmonar",
      },
    ],
    miliar: [
      {
        sintoma: "Febre alta",
        descricao: "Temperatura elevada persistente",
        especificidade: "Forma disseminada",
      },
      {
        sintoma: "Prostração",
        descricao: "Fraqueza extrema, mal-estar geral",
        especificidade: "Comprometimento sistêmico",
      },
      {
        sintoma: "Perda de peso acentuada",
        descricao: "Emagrecimento rápido e significativo",
        especificidade: "Mais grave que outras formas",
      },
      {
        sintoma: "Sintomas neurológicos",
        descricao: "Quando há acometimento do SNC",
        especificidade: "Pode incluir convulsões",
      },
    ],
  };

  const sintomasPVHIV = [
    {
      sintoma: "Tosse",
      criterio: "Qualquer duração",
      observacao: "Independente do tempo",
      prioridade: "Alta",
    },
    {
      sintoma: "Febre",
      criterio: "Qualquer padrão",
      observacao: "Pode ser baixa ou alta",
      prioridade: "Alta",
    },
    {
      sintoma: "Perda de peso",
      criterio: ">10% peso habitual",
      observacao: "Indica imunodeficiência avançada",
      prioridade: "Muito Alta",
    },
    {
      sintoma: "Sudorese noturna",
      criterio: "Recorrente",
      observacao: "Sintoma sistêmico importante",
      prioridade: "Alta",
    },
  ];

  const sinaisAlerta = [
    {
      sinal: "Hemoptise volumosa",
      gravidade: "Emergência",
      acao: "Atendimento imediato",
    },
    {
      sinal: "Dispneia intensa",
      gravidade: "Grave",
      acao: "Avaliação urgente",
    },
    {
      sinal: "Febre alta persistente",
      gravidade: "Moderada",
      acao: "Investigação de complicações",
    },
    {
      sinal: "Perda de peso >15%",
      gravidade: "Grave",
      acao: "Suporte nutricional urgente",
    },
    {
      sinal: "Sintomas neurológicos",
      gravidade: "Emergência",
      acao: "Investigar TB meningoencefálica",
    },
  ];

  const locaisAvaliacao = [
    {
      local: "Atenção Básica (ESF/UBS)",
      atividade: "Busca ativa permanente de SR",
      frequencia: "Todas as consultas",
      populacao: "População geral adscrita",
    },
    {
      local: "Hospitais/Emergência",
      atividade: "Triagem de sintomáticos respiratórios",
      frequencia: "Admissão e durante internação",
      populacao: "Pacientes hospitalizados",
    },
    {
      local: "Serviços para PVHIV",
      atividade: "Rastreamento dos 4 sintomas",
      frequencia: "Todas as visitas",
      populacao: "Pessoas vivendo com HIV",
    },
    {
      local: "Sistema Prisional",
      atividade: "Rastreamento de massa",
      frequencia: "Ingresso + 6 meses/1 ano",
      populacao: "Pessoas privadas de liberdade",
    },
    {
      local: "Consultório na Rua",
      atividade: "Busca ativa oportunística",
      frequencia: "Todos os contatos",
      populacao: "Pessoas em situação de rua",
    },
  ];

  const monitoramentoTratamento = [
    {
      parametro: "Sintomas Respiratórios",
      frequencia: "Mensal",
      objetivo: "Melhora da tosse e dispneia",
      criterio: "Redução progressiva",
    },
    {
      parametro: "Sintomas Sistêmicos",
      frequencia: "Mensal",
      objetivo: "Resolução de febre e sudorese",
      criterio: "Desaparecimento em 2-4 semanas",
    },
    {
      parametro: "Peso Corporal",
      frequencia: "Mensal",
      objetivo: "Ganho de peso",
      criterio: "Recuperação nutricional",
    },
    {
      parametro: "Baciloscopia",
      frequencia: "2º, 4º, 5º, 6º meses",
      objetivo: "Negativação",
      criterio: "Negativa a partir do 2º mês",
    },
  ];

  const criteriosSR = [
    {
      populacao: "População Geral (ESF)",
      criterio: "≥3 semanas",
      contexto: "Busca ativa na comunidade",
      observacao: "Critério mais restritivo",
    },
    {
      populacao: "População Geral (Serviços)",
      criterio: "≥2 semanas",
      contexto: "Procura espontânea por serviços",
      observacao: "Controle de infecção",
    },
    {
      populacao: "Contatos de TB",
      criterio: "Qualquer duração",
      contexto: "Investigação de contatos",
      observacao: "Prioridade máxima",
    },
    {
      populacao: "PVHIV",
      criterio: "Qualquer duração",
      contexto: "Todas as consultas",
      observacao: "Rastreamento obrigatório",
    },
    {
      populacao: "PPL/PSR/Institucionalizados",
      criterio: "Qualquer duração",
      contexto: "Populações vulneráveis",
      observacao: "Alto risco epidemiológico",
    },
  ];

  const examesComplementares = [
    {
      exame: "Baciloscopia",
      indicacao: "Sintomáticos respiratórios",
      interpretacao: "+, ++, +++ indica carga bacilar",
      observacao: "Confirma transmissibilidade",
    },
    {
      exame: "TRM-TB",
      indicacao: "Diagnóstico rápido",
      interpretacao: "Detecta M. tuberculosis e resistência",
      observacao: "Resultado em 2 horas",
    },
    {
      exame: "Radiografia de Tórax",
      indicacao: "Todos os casos suspeitos",
      interpretacao: "Cavidades, infiltrados, nódulos",
      observacao: "Pode ser normal em 15% dos casos",
    },
    {
      exame: "Prova Tuberculínica",
      indicacao: "Contatos, ILTB",
      interpretacao: "≥5mm (contatos), ≥10mm (geral)",
      observacao: "Conversão: incremento ≥10mm",
    },
    {
      exame: "ADA Pleural",
      indicacao: "Suspeita TB pleural",
      interpretacao: ">40 U/L sugere TB",
      observacao: "Diagnóstico diferencial necessário",
    },
  ];

  const getGravidadeBadgeStyle = (gravidade: string) => {
    switch (gravidade) {
      case "Emergência":
        return { backgroundColor: theme.colors.danger[100], color: theme.colors.danger[700] };
      case "Grave":
        return { backgroundColor: theme.colors.warning[100], color: theme.colors.warning[700] };
      default:
        return { backgroundColor: theme.colors.info[100], color: theme.colors.info[700] };
    }
  };

  const getPrioridadeBadgeStyle = (prioridade: string) => {
    return prioridade === "Muito Alta" 
      ? { backgroundColor: theme.colors.danger[100], color: theme.colors.danger[700] }
      : { backgroundColor: theme.colors.primary[100], color: theme.colors.primary[700] };
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <ArrowLeft color={theme.colors.foreground} size={20} />
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <View style={styles.headerTitleContainer}>
              <Thermometer color={theme.colors.danger.DEFAULT} size={24} />
              <Text style={styles.headerTitle}>Sinais e Sintomas</Text>
            </View>
            <Text style={styles.headerSubtitle}>Reconheça os sinais da tuberculose</Text>
          </View>
        </View>

        <Tabs defaultValue="classicos" style={styles.tabs}>
          <TabsList>
            <TabsTrigger value="classicos">Sintomas</TabsTrigger>
            <TabsTrigger value="formas">Formas Clínicas</TabsTrigger>
            <TabsTrigger value="avaliacao">Onde/Quando</TabsTrigger>
            <TabsTrigger value="criterios">Critérios</TabsTrigger>
          </TabsList>

          <TabsContent value="classicos">
            <View style={styles.tabContent}>
              <Alert>
                <Thermometer color={theme.colors.info[600]} size={16} />
                <AlertDescription>
                  Os sintomas clássicos da TB pulmonar são tosse persistente, febre vespertina, sudorese noturna e
                  emagrecimento. A identificação precoce é crucial para interromper a transmissão.
                </AlertDescription>
              </Alert>

              <Card style={styles.card}>
                <CardHeader>
                  <View style={styles.cardHeaderWithIcon}>
                    <Activity color={theme.colors.danger.DEFAULT} size={20} />
                    <CardTitle style={styles.cardTitle}>Sintomas Clássicos da TB Pulmonar</CardTitle>
                  </View>
                  <CardDescription>Principais manifestações clínicas da tuberculose</CardDescription>
                </CardHeader>
                <CardContent>
                  <View style={styles.sintomasContainer}>
                    {sintomasClassicos.map((sintoma, index) => (
                      <View key={index} style={styles.sintomaCard}>
                        <View style={styles.sintomaHeader}>
                          <View style={styles.sintomaInfo}>
                            <Text style={styles.sintomaNome}>{sintoma.sintoma}</Text>
                            <Text style={styles.sintomaDescricao}>{sintoma.descricao}</Text>
                          </View>
                          <Badge style={styles.frequenciaBadge}>
                            <Text style={styles.frequenciaText}>{sintoma.frequencia}%</Text>
                          </Badge>
                        </View>
                        
                        <View style={styles.progressContainer}>
                          <View style={styles.progressHeader}>
                            <Text style={styles.progressLabel}>Frequência</Text>
                            <Text style={styles.progressValue}>{sintoma.frequencia}%</Text>
                          </View>
                          <Progress value={sintoma.frequencia} height={6} />
                        </View>

                        <View style={styles.separator} />
                        
                        <View style={styles.sintomaDetails}>
                          <Text style={styles.detailText}>
                            <Text style={styles.detailLabel}>Duração:</Text> {sintoma.duracao}
                          </Text>
                          <Text style={styles.detailText}>
                            <Text style={styles.detailLabel}>Observação:</Text> {sintoma.observacao}
                          </Text>
                        </View>
                      </View>
                    ))}
                  </View>
                </CardContent>
              </Card>

              <Card style={styles.card}>
                <CardHeader>
                  <View style={styles.cardHeaderWithIcon}>
                    <Users color={theme.colors.primary[600]} size={20} />
                    <CardTitle style={styles.cardTitle}>Sintomas em PVHIV</CardTitle>
                  </View>
                  <CardDescription>Rastreamento obrigatório dos 4 sintomas em todas as consultas</CardDescription>
                </CardHeader>
                <CardContent>
                  <View style={styles.pvhivGrid}>
                    {sintomasPVHIV.map((sintoma, index) => (
                      <View key={index} style={styles.pvhivCard}>
                        <View style={styles.pvhivHeader}>
                          <Text style={styles.pvhivNome}>{sintoma.sintoma}</Text>
                          <Badge style={[styles.prioridadeBadge, getPrioridadeBadgeStyle(sintoma.prioridade)]}>
                            <Text style={[styles.prioridadeText, { color: getPrioridadeBadgeStyle(sintoma.prioridade).color }]}>
                              {sintoma.prioridade}
                            </Text>
                          </Badge>
                        </View>
                        <Text style={styles.pvhivCriterio}>
                          <Text style={styles.detailLabel}>Critério:</Text> {sintoma.criterio}
                        </Text>
                        <Text style={styles.pvhivObservacao}>{sintoma.observacao}</Text>
                      </View>
                    ))}
                  </View>
                </CardContent>
              </Card>

              <Card style={styles.card}>
                <CardHeader>
                  <View style={styles.cardHeaderWithIcon}>
                    <AlertTriangle color={theme.colors.warning[600]} size={20} />
                    <CardTitle style={styles.cardTitle}>Sinais de Alerta</CardTitle>
                  </View>
                  <CardDescription>Sintomas que requerem atenção imediata</CardDescription>
                </CardHeader>
                <CardContent>
                  <View style={styles.alertasContainer}>
                    {sinaisAlerta.map((sinal, index) => (
                      <View key={index} style={styles.alertaCard}>
                        <View style={styles.alertaInfo}>
                          <Text style={styles.alertaSinal}>{sinal.sinal}</Text>
                          <Text style={styles.alertaAcao}>{sinal.acao}</Text>
                        </View>
                        <Badge style={[styles.gravidadeBadge, getGravidadeBadgeStyle(sinal.gravidade)]}>
                          <Text style={[styles.gravidadeText, { color: getGravidadeBadgeStyle(sinal.gravidade).color }]}>
                            {sinal.gravidade}
                          </Text>
                        </Badge>
                      </View>
                    ))}
                  </View>
                </CardContent>
              </Card>
            </View>
          </TabsContent>

          <TabsContent value="formas">
            <View style={styles.tabContent}>
              <Card style={styles.card}>
                <CardHeader>
                  <CardTitle style={styles.formaTitle}>TB Primária (mais comum em crianças)</CardTitle>
                  <CardDescription>Manifestações insidiosas, tosse nem sempre presente</CardDescription>
                </CardHeader>
                <CardContent>
                  <View style={styles.formasGrid}>
                    {sintomasFormas.primaria.map((sintoma, index) => (
                      <View key={index} style={[styles.formaCard, styles.primaria]}>
                        <Text style={styles.formaSintoma}>{sintoma.sintoma}</Text>
                        <Text style={styles.formaDescricao}>{sintoma.descricao}</Text>
                        <Badge variant="outline" style={styles.especificidadeBadge}>
                          <Text style={styles.especificidadeText}>{sintoma.especificidade}</Text>
                        </Badge>
                      </View>
                    ))}
                  </View>
                </CardContent>
              </Card>

              <Card style={styles.card}>
                <CardHeader>
                  <CardTitle style={styles.formaTitle}>TB Pós-Primária/Secundária (mais comum em adultos)</CardTitle>
                  <CardDescription>Sintomas respiratórios e sistêmicos mais evidentes</CardDescription>
                </CardHeader>
                <CardContent>
                  <View style={styles.formasGrid}>
                    {sintomasFormas.secundaria.map((sintoma, index) => (
                      <View key={index} style={[styles.formaCard, styles.secundaria]}>
                        <Text style={styles.formaSintoma}>{sintoma.sintoma}</Text>
                        <Text style={styles.formaDescricao}>{sintoma.descricao}</Text>
                        <Badge variant="outline" style={styles.especificidadeBadge}>
                          <Text style={styles.especificidadeText}>{sintoma.especificidade}</Text>
                        </Badge>
                      </View>
                    ))}
                  </View>
                </CardContent>
              </Card>

              <Card style={styles.card}>
                <CardHeader>
                  <CardTitle style={styles.formaTitle}>TB Miliar (forma disseminada)</CardTitle>
                  <CardDescription>Comprometimento sistêmico grave</CardDescription>
                </CardHeader>
                <CardContent>
                  <View style={styles.formasGrid}>
                    {sintomasFormas.miliar.map((sintoma, index) => (
                      <View key={index} style={[styles.formaCard, styles.miliar]}>
                        <Text style={styles.formaSintoma}>{sintoma.sintoma}</Text>
                        <Text style={styles.formaDescricao}>{sintoma.descricao}</Text>
                        <Badge style={styles.miliarBadge}>
                          <Text style={styles.miliarText}>{sintoma.especificidade}</Text>
                        </Badge>
                      </View>
                    ))}
                  </View>
                </CardContent>
              </Card>

              <Alert>
                <Stethoscope color={theme.colors.info[600]} size={16} />
                <AlertDescription>
                  <Text style={styles.boldText}>Diagnóstico Diferencial:</Text> Considerar silicose, micoses pulmonares, vasculites, sarcoidose
                  (TB pulmonar) e linfomas, empiema, artrite reumatoide (TB pleural).
                </AlertDescription>
              </Alert>
            </View>
          </TabsContent>

          <TabsContent value="criterios">
            <View style={styles.tabContent}>
              <Card style={styles.card}>
                <CardHeader>
                  <View style={styles.cardHeaderWithIcon}>
                    <Calculator color={theme.colors.primary[600]} size={20} />
                    <CardTitle style={styles.cardTitle}>Critérios para Sintomático Respiratório</CardTitle>
                  </View>
                  <CardDescription>Duração da tosse conforme população</CardDescription>
                </CardHeader>
                <CardContent>
                  <View style={styles.criteriosContainer}>
                    {criteriosSR.map((criterio, index) => (
                      <View key={index} style={styles.criterioCard}>
                        <View style={styles.criterioHeader}>
                          <Text style={styles.criterioPopulacao}>{criterio.populacao}</Text>
                          <Badge variant="outline" style={styles.criterioBadge}>
                            <Text style={styles.criterioText}>{criterio.criterio}</Text>
                          </Badge>
                        </View>
                        <Text style={styles.criterioContexto}>{criterio.contexto}</Text>
                        <Text style={styles.criterioObservacao}>{criterio.observacao}</Text>
                      </View>
                    ))}
                  </View>
                </CardContent>
              </Card>

              <Card style={styles.card}>
                <CardHeader>
                  <CardTitle style={styles.cardTitle}>Exames Complementares</CardTitle>
                  <CardDescription>Investigação baseada nos sintomas</CardDescription>
                </CardHeader>
                <CardContent>
                  <View style={styles.examesContainer}>
                    {examesComplementares.map((exame, index) => (
                      <View key={index} style={styles.exameCard}>
                        <Text style={styles.exameNome}>{exame.exame}</Text>
                        <View style={styles.exameInfo}>
                          <Text style={styles.exameItem}>
                            <Text style={styles.detailLabel}>Indicação:</Text> {exame.indicacao}
                          </Text>
                          <Text style={styles.exameItem}>
                            <Text style={styles.detailLabel}>Interpretação:</Text> {exame.interpretacao}
                          </Text>
                          <Text style={styles.exameObservacao}>{exame.observacao}</Text>
                        </View>
                      </View>
                    ))}
                  </View>
                </CardContent>
              </Card>

              <Card style={styles.card}>
                <CardHeader>
                  <CardTitle style={styles.cardTitle}>Valores de Referência</CardTitle>
                </CardHeader>
                <CardContent>
                  <View style={styles.valoresContainer}>
                    <View style={[styles.valorCard, styles.valorDanger]}>
                      <Text style={styles.valorTitulo}>Perda de Peso</Text>
                      <Text style={styles.valorDescricao}>
                        &gt;10% peso habitual = imunodeficiência avançada (PVHIV)
                      </Text>
                    </View>
                    <View style={[styles.valorCard, styles.valorPrimary]}>
                      <Text style={styles.valorTitulo}>Prova Tuberculínica</Text>
                      <Text style={styles.valorDescricao}>
                        ≥5mm (contatos) | ≥10mm (geral) | Conversão: ≥10mm incremento
                      </Text>
                    </View>
                    <View style={[styles.valorCard, styles.valorSuccess]}>
                      <Text style={styles.valorTitulo}>ADA Pleural</Text>
                      <Text style={styles.valorDescricao}>
                        &gt;40 U/L sugere TB pleural
                      </Text>
                    </View>
                    <View style={[styles.valorCard, styles.valorInfo]}>
                      <Text style={styles.valorTitulo}>Baciloscopia</Text>
                      <Text style={styles.valorDescricao}>
                        +, ++, +++ indica carga bacilar e transmissibilidade
                      </Text>
                    </View>
                  </View>
                </CardContent>
              </Card>

              <Alert>
                <Activity color={theme.colors.info[600]} size={16} />
                <AlertDescription>
                  <Text style={styles.boldText}>Importante:</Text> Em crianças, pode ser usado o escore brasileiro que combina critérios
                  clínicos, radiológicos e epidemiológicos devido à dificuldade de confirmação bacteriológica.
                </AlertDescription>
              </Alert>
            </View>
          </TabsContent>

          <TabsContent value="avaliacao">
            <View style={styles.tabContent}>
              <Card style={styles.card}>
                <CardHeader>
                  <View style={styles.cardHeaderWithIcon}>
                    <MapPin color={theme.colors.primary[600]} size={20} />
                    <CardTitle style={styles.cardTitle}>Locais de Avaliação</CardTitle>
                  </View>
                  <CardDescription>Onde os sintomas são identificados e avaliados</CardDescription>
                </CardHeader>
                <CardContent>
                  <View style={styles.locaisContainer}>
                    {locaisAvaliacao.map((local, index) => (
                      <View key={index} style={styles.localCard}>
                        <View style={styles.localHeader}>
                          <Text style={styles.localNome}>{local.local}</Text>
                          <Badge variant="outline" style={styles.frequenciaLocalBadge}>
                            <Text style={styles.frequenciaLocalText}>{local.frequencia}</Text>
                          </Badge>
                        </View>
                        <View style={styles.localInfoGrid}>
                          <View style={styles.localInfoItem}>
                            <Text style={styles.localInfoLabel}>Atividade</Text>
                            <Text style={styles.localInfoValue}>{local.atividade}</Text>
                          </View>
                          <View style={styles.localInfoItem}>
                            <Text style={styles.localInfoLabel}>População</Text>
                            <Text style={styles.localInfoValue}>{local.populacao}</Text>
                          </View>
                        </View>
                      </View>
                    ))}
                  </View>
                </CardContent>
              </Card>

              <Card style={styles.card}>
                <CardHeader>
                  <View style={styles.cardHeaderWithIcon}>
                    <Clock color={theme.colors.success[600]} size={20} />
                    <CardTitle style={styles.cardTitle}>Monitoramento Durante o Tratamento</CardTitle>
                  </View>
                  <CardDescription>Acompanhamento mensal dos sintomas</CardDescription>
                </CardHeader>
                <CardContent>
                  <View style={styles.monitoramentoContainer}>
                    {monitoramentoTratamento.map((item, index) => (
                      <View key={index} style={styles.monitoramentoCard}>
                        <View style={styles.monitoramentoHeader}>
                          <Text style={styles.monitoramentoParametro}>{item.parametro}</Text>
                          <Badge variant="secondary" style={styles.monitoramentoFrequenciaBadge}>
                            <Text style={styles.monitoramentoFrequenciaText}>{item.frequencia}</Text>
                          </Badge>
                        </View>
                        <View style={styles.monitoramentoInfo}>
                          <Text style={styles.monitoramentoObjetivo}>
                            <Text style={styles.detailLabel}>Objetivo:</Text> {item.objetivo}
                          </Text>
                          <Text style={styles.monitoramentoCriterio}>
                            <Text style={styles.detailLabel}>Critério:</Text> {item.criterio}
                          </Text>
                        </View>
                      </View>
                    ))}
                  </View>
                </CardContent>
              </Card>
            </View>
          </TabsContent>
        </Tabs>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
    gap: theme.spacing.sm,
  },
  backButton: {
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.muted.DEFAULT,
  },
  headerContent: {
    flex: 1,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  headerTitle: {
    fontSize: theme.fontSize['2xl'],
    fontWeight: 'bold',
    color: theme.colors.foreground,
  },
  headerSubtitle: {
    fontSize: theme.fontSize.md,
    color: theme.colors.muted.foreground,
  },
  tabs: {
    flex: 1,
  },
  tabContent: {
    gap: theme.spacing.md,
  },
  card: {
    marginBottom: theme.spacing.md,
  },
  cardHeaderWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  cardTitle: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.foreground,
  },
  sintomasContainer: {
    gap: theme.spacing.md,
  },
  sintomaCard: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
  },
  sintomaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.md,
  },
  sintomaInfo: {
    flex: 1,
    marginRight: theme.spacing.sm,
  },
  sintomaNome: {
    fontSize: theme.fontSize.md,
    fontWeight: '600',
    color: theme.colors.foreground,
    marginBottom: theme.spacing.xs,
  },
  sintomaDescricao: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
  },
  frequenciaBadge: {
    backgroundColor: theme.colors.primary[100],
  },
  frequenciaText: {
    color: theme.colors.primary[700],
    fontSize: theme.fontSize.xs,
  },
  progressContainer: {
    marginBottom: theme.spacing.sm,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  progressLabel: {
    fontSize: theme.fontSize.xs,
    fontWeight: '500',
    color: theme.colors.foreground,
  },
  progressValue: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted.foreground,
  },
  separator: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.sm,
  },
  sintomaDetails: {
    gap: theme.spacing.xs,
  },
  detailText: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.foreground,
  },
  detailLabel: {
    fontWeight: 'bold',
  },
  pvhivGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
  },
  pvhivCard: {
    width: '48%',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.sm,
  },
  pvhivHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.sm,
  },
  pvhivNome: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    flex: 1,
  },
  prioridadeBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  prioridadeText: {
    fontSize: 10,
  },
  pvhivCriterio: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
    marginBottom: theme.spacing.xs,
  },
  pvhivObservacao: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted.foreground,
  },
  alertasContainer: {
    gap: theme.spacing.sm,
  },
  alertaCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
  },
  alertaInfo: {
    flex: 1,
  },
  alertaSinal: {
    fontSize: theme.fontSize.sm,
    fontWeight: '500',
    color: theme.colors.foreground,
    marginBottom: 2,
  },
  alertaAcao: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.muted.foreground,
  },
  gravidadeBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  gravidadeText: {
    fontSize: 10,
  },
  formaTitle: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.foreground,
  },
  formasGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
  },
  formaCard: {
    width: '48%',
    paddingLeft: theme.spacing.sm,
    paddingVertical: theme.spacing.sm,
    borderLeftWidth: 4,
  },
  primaria: {
    borderLeftColor: theme.colors.primary.DEFAULT,
  },
  secundaria: {
    borderLeftColor: theme.colors.success.DEFAULT,
  },
  miliar: {
    borderLeftColor: theme.colors.danger.DEFAULT,
  },
  formaSintoma: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    marginBottom: theme.spacing.xs,
  },
  formaDescricao: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
    marginBottom: theme.spacing.xs,
  },
  especificidadeBadge: {
    alignSelf: 'flex-start',
  },
  especificidadeText: {
    fontSize: 10,
    color: theme.colors.muted.foreground,
  },
  miliarBadge: {
    backgroundColor: theme.colors.danger[100],
    alignSelf: 'flex-start',
  },
  miliarText: {
    fontSize: 10,
    color: theme.colors.danger[700],
  },
  boldText: {
    fontWeight: 'bold',
  },
  criteriosContainer: {
    gap: theme.spacing.md,
  },
  criterioCard: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
  },
  criterioHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.sm,
  },
  criterioPopulacao: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    flex: 1,
  },
  criterioBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  criterioText: {
    fontSize: 10,
    color: theme.colors.muted.foreground,
  },
  criterioContexto: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
    marginBottom: theme.spacing.xs,
  },
  criterioObservacao: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.primary[700],
  },
  // Estilos para seção de locais de avaliação
  locaisContainer: {
    gap: theme.spacing.md,
  },
  localCard: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
  },
  localHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.sm,
  },
  localNome: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    flex: 1,
  },
  frequenciaLocalBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  frequenciaLocalText: {
    fontSize: 10,
    color: theme.colors.muted.foreground,
  },
  localInfoGrid: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  localInfoItem: {
    flex: 1,
  },
  localInfoLabel: {
    fontSize: theme.fontSize.sm,
    fontWeight: '500',
    color: theme.colors.primary[600],
    marginBottom: 2,
  },
  localInfoValue: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
  },
  // Estilos para monitoramento do tratamento
  monitoramentoContainer: {
    gap: theme.spacing.md,
  },
  monitoramentoCard: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.sm,
  },
  monitoramentoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.sm,
  },
  monitoramentoParametro: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    flex: 1,
  },
  monitoramentoFrequenciaBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    backgroundColor: theme.colors.secondary.DEFAULT,
  },
  monitoramentoFrequenciaText: {
    fontSize: 10,
    color: theme.colors.secondary.foreground,
  },
  monitoramentoInfo: {
    gap: theme.spacing.xs,
  },
  monitoramentoObjetivo: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
  },
  monitoramentoCriterio: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.success[700],
  },
  // Estilos para exames complementares
  examesContainer: {
    gap: theme.spacing.md,
  },
  exameCard: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.sm,
  },
  exameNome: {
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.foreground,
    marginBottom: theme.spacing.sm,
  },
  exameInfo: {
    gap: theme.spacing.xs,
  },
  exameItem: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.foreground,
  },
  exameObservacao: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
  },
  // Estilos para valores de referência
  valoresContainer: {
    gap: theme.spacing.sm,
  },
  valorCard: {
    paddingLeft: theme.spacing.sm,
    paddingVertical: theme.spacing.sm,
    borderLeftWidth: 4,
  },
  valorDanger: {
    borderLeftColor: theme.colors.danger.DEFAULT,
  },
  valorPrimary: {
    borderLeftColor: theme.colors.primary.DEFAULT,
  },
  valorSuccess: {
    borderLeftColor: theme.colors.success.DEFAULT,
  },
  valorInfo: {
    borderLeftColor: theme.colors.info.DEFAULT,
  },
  valorTitulo: {
    fontSize: theme.fontSize.sm,
    fontWeight: '500',
    color: theme.colors.foreground,
    marginBottom: 2,
  },
  valorDescricao: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.muted.foreground,
  },
});