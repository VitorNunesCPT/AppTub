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
// import { Separator } from '@/components/ui/separator';
import { 
  Heart, 
  MapPin, 
  Clock, 
  Activity, 
  Calculator, 
  Stethoscope, 
  Shield, 
  Pill 
} from 'lucide-react-native';

const interacoesMedicamentos = {
  rifampicina: [
    {
      arv: "Efavirenz",
      interacao: "Indução enzimática mútua",
      manejo: "Aumentar EFV para 800mg/dia se peso >60kg",
      evidencia: "Recomendação forte",
    },
    {
      arv: "Rilpivirina",
      interacao: "Redução significativa dos níveis",
      manejo: "Contraindicado - usar EFV",
      evidencia: "Contraindicação absoluta",
    },
    {
      arv: "Inibidores de Protease",
      interacao: "Redução drástica dos níveis",
      manejo: "Substituir por Rifabutina 150mg 3x/semana",
      evidencia: "Recomendação forte",
    },
    {
      arv: "Dolutegravir",
      interacao: "Redução moderada dos níveis",
      manejo: "Aumentar DTG para 50mg 2x/dia",
      evidencia: "Recomendação forte",
    },
  ],
  rifabutina: [
    {
      arv: "Lopinavir/ritonavir",
      interacao: "Aumento dos níveis de rifabutina",
      manejo: "Rifabutina 150mg 3x/semana",
      evidencia: "Dose ajustada validada",
    },
    {
      arv: "Atazanavir/ritonavir",
      interacao: "Aumento dos níveis de rifabutina",
      manejo: "Rifabutina 150mg 3x/semana",
      evidencia: "Dose ajustada validada",
    },
    {
      arv: "Efavirenz",
      interacao: "Redução dos níveis de rifabutina",
      manejo: "Rifabutina 450-600mg/dia",
      evidencia: "Ajuste necessário",
    },
  ],
};

export default function TBHIVScreen() {
  const epidemiologia = [
    {
      aspecto: "Prevalência Global",
      dados: "25% dos casos de TB ocorrem em PVHIV",
      impacto: "Principal causa de morte em PVHIV",
    },
    {
      aspecto: "Risco de Adoecimento",
      dados: "20-37x maior risco que população geral",
      impacto: "Risco anual de 5-15% vs 0,1% na população geral",
    },
    {
      aspecto: "Formas Clínicas",
      dados: "Maior frequência de formas extrapulmonares",
      impacto: "Diagnóstico mais complexo",
    },
    {
      aspecto: "Mortalidade",
      dados: "Maior mortalidade mesmo com tratamento",
      impacto: "Necessidade de manejo especializado",
    },
  ];

  const cronogramaTARV = [
    {
      cd4: "CD4+ <50 céls/mm³",
      inicio: "2ª semana de tratamento TB",
      justificativa: "Alto risco de progressão e morte",
      cuidados: "Monitorar IRIS, iniciar profilaxias",
    },
    {
      cd4: "CD4+ 50-200 céls/mm³",
      inicio: "8ª semana de tratamento TB",
      justificativa: "Equilibrio entre benefício e risco de IRIS",
      cuidados: "Monitorar IRIS, avaliar profilaxias",
    },
    {
      cd4: "CD4+ >200 céls/mm³",
      inicio: "Após término do tratamento TB",
      justificativa: "Menor risco de progressão",
      cuidados: "Monitoramento clínico regular",
    },
    {
      cd4: "TB meningoencefálica",
      inicio: "4-6 semanas independente do CD4+",
      justificativa: "Reduzir risco de IRIS neurológica",
      cuidados: "Corticoides, monitoramento intensivo",
    },
  ];

  const cuidadosEspeciais = {
    diagnostico: [
      "Investigar TB em todos os PVHIV sintomáticos",
      "Rastreamento dos 4 sintomas em todas as consultas",
      "Considerar formas extrapulmonares atípicas",
      "TRM-TB preferencial para diagnóstico rápido",
      "Cultura obrigatória para teste de sensibilidade",
      "Investigar TB disseminada em casos graves",
    ],
    tratamento: [
      "Piridoxina obrigatória (50-100mg/dia)",
      "TDO preferencialmente diário",
      "Monitoramento mensal obrigatório",
      "Atenção para interações medicamentosas",
      "Esquemas sem rifampicina são menos eficazes",
      "Duração mínima de 6 meses",
    ],
    monitoramento: [
      "Função hepática mais frequente",
      "Hemograma mensal",
      "Carga viral e CD4+ regulares",
      "Vigilância para IRIS",
      "Adesão ao tratamento",
      "Efeitos adversos sobrepostos",
    ],
  };

  const iris = [
    {
      tipo: "IRIS Paradoxal",
      definicao: "Piora clínica após melhora inicial",
      manifestacoes: "Febre, linfadenomegalia, piora radiológica",
      manejo: "Manter tratamentos, considerar corticoides",
    },
    {
      tipo: "IRIS de Desmascaramento",
      definicao: "TB manifesta após início do TARV",
      manifestacoes: "Sintomas de TB em paciente assintomático",
      manejo: "Iniciar tratamento TB, avaliar corticoides",
    },
    {
      tipo: "IRIS Neurológica",
      definicao: "Manifestações neurológicas após TARV",
      manifestacoes: "Cefaleia, convulsões, déficits focais",
      manejo: "Corticoides, manejo em UTI se necessário",
    },
  ];

  const esquemasTerapeuticos = [
    {
      situacao: "PVHIV com ARV baseado em NNRTI",
      esquema: "2RHZE/4RH",
      observacoes: "Ajustar dose de EFV se necessário",
      duracao: "6 meses",
    },
    {
      situacao: "PVHIV com IP/r",
      esquema: "2RbHZE/4RbH",
      observacoes: "Rifabutina 150mg 3x/semana",
      duracao: "6 meses",
    },
    {
      situacao: "PVHIV com DTG",
      esquema: "2RHZE/4RH",
      observacoes: "DTG 50mg 2x/dia durante TB",
      duracao: "6 meses",
    },
    {
      situacao: "TB meningoencefálica",
      esquema: "2RHZE/10RH",
      observacoes: "Corticoides, TARV após 4-6 semanas",
      duracao: "12 meses",
    },
  ];

  const profilaxias = [
    {
      condicao: "Pneumocistose",
      indicacao: "CD4+ <200 ou sintomas sugestivos",
      medicamento: "Sulfametoxazol-trimetoprima",
      dose: "800/160mg/dia",
    },
    {
      condicao: "Toxoplasmose",
      indicacao: "CD4+ <100 + IgG positivo",
      medicamento: "Sulfametoxazol-trimetoprima",
      dose: "800/160mg/dia",
    },
    {
      condicao: "Complexo MAC",
      indicacao: "CD4+ <50",
      medicamento: "Azitromicina",
      dose: "1200mg/semana",
    },
    {
      condicao: "Candidíase esofágica",
      indicacao: "Episódios recorrentes",
      medicamento: "Fluconazol",
      dose: "100-200mg/dia",
    },
  ];

  const criteriosLaboratoriais = [
    {
      parametro: "CD4+ para início TARV",
      valor: "<50 céls/mm³ = 2ª semana",
      observacao: "50-200 = 8ª semana, >200 = após TB",
    },
    {
      parametro: "Carga Viral",
      valor: "Meta: indetectável",
      observacao: "Monitorar a cada 3-6 meses",
    },
    {
      parametro: "Hemoglobina",
      valor: ">10 g/dL",
      observacao: "Investigar anemia se <10 g/dL",
    },
    {
      parametro: "TGO/TGP",
      valor: "<3x LSN",
      observacao: "Monitoramento mais frequente",
    },
  ];

  const locaisAtendimento = [
    {
      local: "SAE (Serviço de Atenção Especializada)",
      papel: "Coordenação do cuidado",
      atividades: ["Manejo do HIV", "Prescrição de ARV", "Monitoramento laboratorial"],
    },
    {
      local: "Atenção Básica",
      papel: "Tratamento da TB",
      atividades: ["TDO", "Monitoramento TB", "Busca de contatos"],
    },
    {
      local: "Unidades de Referência",
      papel: "Casos complexos",
      atividades: ["TB drogarresistente", "IRIS grave", "Complicações"],
    },
    {
      local: "Hospital",
      papel: "Casos graves",
      atividades: ["IRIS neurológica", "TB disseminada", "Falência respiratória"],
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Heart size={24} color="#dc2626" />
          <Text style={styles.title}>TB-HIV (Coinfecção)</Text>
        </View>
        <Text style={styles.subtitle}>
          Manejo da coinfecção tuberculose-HIV
        </Text>
      </View>

      <Tabs defaultValue="epidemiologia" style={styles.tabs}>
        <TabsList style={styles.tabsList}>
          <TabsTrigger value="epidemiologia" style={styles.tabsTrigger}>
            <Text style={styles.tabsText}>O Quê/Por Quê</Text>
          </TabsTrigger>
          <TabsTrigger value="interacoes" style={styles.tabsTrigger}>
            <Text style={styles.tabsText}>Interações</Text>
          </TabsTrigger>
          <TabsTrigger value="cronograma" style={styles.tabsTrigger}>
            <Text style={styles.tabsText}>Quando/Como</Text>
          </TabsTrigger>
          <TabsTrigger value="cuidados" style={styles.tabsTrigger}>
            <Text style={styles.tabsText}>Cuidados</Text>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="epidemiologia" style={styles.tabsContent}>
          <Alert style={styles.alert}>
            <Heart size={16} color="#dc2626" />
            <AlertDescription style={styles.alertDescription}>
              A coinfecção TB-HIV representa um dos maiores desafios da saúde pública global. PVHIV têm risco 20-37
              vezes maior de desenvolver TB ativa, sendo a TB a principal causa de morte nesta população.
            </AlertDescription>
          </Alert>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Activity size={20} color="#dc2626" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Epidemiologia da Coinfecção
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Dados epidemiológicos e impacto da coinfecção TB-HIV
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.epidemiologiaContainer}>
                {epidemiologia.map((item, index) => (
                  <View key={index} style={[styles.epidemiologiaItem, { borderLeftColor: '#dc2626' }]}>
                    <View style={styles.epidemiologiaHeader}>
                      <Text style={styles.aspectoTitulo}>{item.aspecto}</Text>
                      <Badge variant="outline" style={styles.badge}>
                        <Text style={styles.badgeText}>Epidemiológico</Text>
                      </Badge>
                    </View>
                    <Text style={styles.dadosText}>{item.dados}</Text>
                    <Text style={[styles.impactoText, { color: '#dc2626' }]}>{item.impacto}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitleText}>Por que a Coinfecção é Grave?</CardTitle>
            </CardHeader>
            <CardContent>
              <View style={styles.gravidadeContainer}>
                <View style={[styles.gravidadeItem, { borderLeftColor: '#dc2626' }]}>
                  <Text style={styles.gravidadeTitulo}>Imunodeficiência</Text>
                  <Text style={styles.gravidadeDescricao}>
                    HIV compromete resposta imune celular, facilitando reativação e progressão da TB
                  </Text>
                </View>
                <View style={[styles.gravidadeItem, { borderLeftColor: '#f97316' }]}>
                  <Text style={styles.gravidadeTitulo}>Apresentação Atípica</Text>
                  <Text style={styles.gravidadeDescricao}>
                    Formas extrapulmonares, baciloscopia negativa, manifestações disseminadas
                  </Text>
                </View>
                <View style={[styles.gravidadeItem, { borderLeftColor: '#eab308' }]}>
                  <Text style={styles.gravidadeTitulo}>Interações Medicamentosas</Text>
                  <Text style={styles.gravidadeDescricao}>
                    Rifamicinas interagem com ARVs, necessitando ajustes complexos
                  </Text>
                </View>
                <View style={[styles.gravidadeItem, { borderLeftColor: '#a855f7' }]}>
                  <Text style={styles.gravidadeTitulo}>IRIS (Síndrome Inflamatória)</Text>
                  <Text style={styles.gravidadeDescricao}>Reconstituição imune pode causar piora paradoxal dos sintomas</Text>
                </View>
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={[styles.cardTitleText, { fontSize: 16 }]}>Síndrome Inflamatória de Reconstituição Imune (IRIS)</CardTitle>
              <CardDescription style={styles.cardDescription}>
                Complicação importante após início do TARV
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.irisContainer}>
                {iris.map((item, index) => (
                  <View key={index} style={styles.irisItem}>
                    <View style={styles.irisHeader}>
                      <Text style={styles.irisTitulo}>{item.tipo}</Text>
                      <Badge variant="destructive" style={styles.irisBadge}>
                        <Text style={styles.irisBadgeText}>IRIS</Text>
                      </Badge>
                    </View>
                    <Text style={styles.irisDefinicao}>
                      <Text style={styles.boldText}>Definição:</Text> {item.definicao}
                    </Text>
                    <Text style={styles.irisManifestacoes}>
                      <Text style={styles.boldText}>Manifestações:</Text> {item.manifestacoes}
                    </Text>
                    <Text style={[styles.irisManejo, { color: '#2563eb' }]}>{item.manejo}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interacoes" style={styles.tabsContent}>
          <Alert style={styles.alert}>
            <Pill size={16} color="#a855f7" />
            <AlertDescription style={styles.alertDescription}>
              As interações entre medicamentos antiTB e antirretrovirais são complexas e clinicamente significativas.
              Rifampicina é o principal indutor enzimático, requerendo ajustes ou substituições.
            </AlertDescription>
          </Alert>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Pill size={20} color="#a855f7" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Interações com Rifampicina
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Principal medicamento com interações clinicamente relevantes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.interacoesContainer}>
                {interacoesMedicamentos.rifampicina.map((interacao, index) => (
                  <View key={index} style={styles.interacaoItem}>
                    <View style={styles.interacaoHeader}>
                      <Text style={styles.arvNome}>{interacao.arv}</Text>
                      <Badge
                        variant={
                          interacao.evidencia === "Contraindicação absoluta"
                            ? "destructive"
                            : interacao.evidencia === "Recomendação forte"
                              ? "default"
                              : "secondary"
                        }
                        style={styles.evidenciaBadge}
                      >
                        <Text style={
                          interacao.evidencia === "Contraindicação absoluta"
                            ? styles.badgeDestructiveText
                            : styles.badgeText
                        }>
                          {interacao.evidencia}
                        </Text>
                      </Badge>
                    </View>
                    <Text style={styles.interacaoDescricao}>
                      <Text style={styles.boldText}>Interação:</Text> {interacao.interacao}
                    </Text>
                    {/* <Separator style={styles.separator} /> */}
                    <Text style={[styles.manejoTexto, { color: '#7c3aed' }]}>{interacao.manejo}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Pill size={20} color="#3b82f6" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Interações com Rifabutina
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Alternativa à rifampicina com menos interações
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.interacoesContainer}>
                {interacoesMedicamentos.rifabutina.map((interacao, index) => (
                  <View key={index} style={styles.interacaoItem}>
                    <View style={styles.interacaoHeader}>
                      <Text style={styles.arvNome}>{interacao.arv}</Text>
                      <Badge variant="outline" style={styles.evidenciaBadge}>
                        <Text style={styles.badgeText}>{interacao.evidencia}</Text>
                      </Badge>
                    </View>
                    <Text style={styles.interacaoDescricao}>
                      <Text style={styles.boldText}>Interação:</Text> {interacao.interacao}
                    </Text>
                    {/* <Separator style={styles.separator} /> */}
                    <Text style={[styles.manejoTexto, { color: '#2563eb' }]}>{interacao.manejo}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={[styles.cardTitleText, { fontSize: 16 }]}>Esquemas Terapêuticos Recomendados</CardTitle>
              <CardDescription style={styles.cardDescription}>
                Combinações seguras e eficazes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.esquemasContainer}>
                {esquemasTerapeuticos.map((esquema, index) => (
                  <View key={index} style={styles.esquemaItem}>
                    <View style={styles.esquemaHeader}>
                      <Text style={styles.situacaoTitulo}>{esquema.situacao}</Text>
                      <Badge variant="outline" style={styles.duracaoBadge}>
                        <Text style={styles.duracaoText}>{esquema.duracao}</Text>
                      </Badge>
                    </View>
                    <View style={styles.esquemaBox}>
                      <Text style={styles.esquemaTexto}>{esquema.esquema}</Text>
                    </View>
                    <Text style={styles.observacoesTexto}>{esquema.observacoes}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cronograma" style={styles.tabsContent}>
          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Clock size={20} color="#10b981" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Cronograma de Início do TARV
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Baseado na contagem de CD4+ e forma clínica da TB
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.cronogramaContainer}>
                {cronogramaTARV.map((item, index) => (
                  <View key={index} style={[styles.cronogramaItem, { borderLeftColor: '#10b981' }]}>
                    <View style={styles.cronogramaHeader}>
                      <Text style={styles.cd4Titulo}>{item.cd4}</Text>
                      <Badge
                        variant={
                          item.inicio.includes("2ª semana")
                            ? "destructive"
                            : item.inicio.includes("8ª semana")
                              ? "default"
                              : "secondary"
                        }
                        style={styles.iniciBadge}
                      >
                        <Text style={
                          item.inicio.includes("2ª semana")
                            ? styles.badgeDestructiveText
                            : styles.badgeText
                        }>
                          {item.inicio}
                        </Text>
                      </Badge>
                    </View>
                    <Text style={styles.justificativaTexto}>
                      <Text style={styles.boldText}>Justificativa:</Text> {item.justificativa}
                    </Text>
                    <Text style={[styles.cuidadosTexto, { color: '#059669' }]}>{item.cuidados}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <MapPin size={20} color="#3b82f6" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Locais de Atendimento
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Organização da rede de cuidados para coinfecção
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.locaisContainer}>
                {locaisAtendimento.map((local, index) => (
                  <View key={index} style={styles.localItem}>
                    <View style={styles.localHeader}>
                      <Text style={styles.localNome}>{local.local}</Text>
                      <Text style={styles.localPapel}>{local.papel}</Text>
                    </View>
                    <View style={styles.atividadesContainer}>
                      {local.atividades.map((atividade, idx) => (
                        <Badge key={idx} variant="outline" style={styles.atividadeBadge}>
                          <Text style={styles.atividadeText}>{atividade}</Text>
                        </Badge>
                      ))}
                    </View>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={[styles.cardTitleText, { fontSize: 16 }]}>Profilaxias Oportunistas</CardTitle>
              <CardDescription style={styles.cardDescription}>
                Prevenção de infecções oportunistas conforme CD4+
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.profilaxiasContainer}>
                {profilaxias.map((profilaxia, index) => (
                  <View key={index} style={styles.profilaxiaItem}>
                    <View style={styles.profilaxiaInfo}>
                      <Text style={styles.condicaoTitulo}>{profilaxia.condicao}</Text>
                      <Text style={styles.indicacaoTexto}>{profilaxia.indicacao}</Text>
                    </View>
                    <View style={styles.medicamentoInfo}>
                      <Text style={styles.medicamentoNome}>{profilaxia.medicamento}</Text>
                      <Text style={styles.doseTexto}>{profilaxia.dose}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cuidados" style={styles.tabsContent}>
          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Stethoscope size={20} color="#a855f7" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Cuidados no Diagnóstico
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Abordagem diagnóstica específica para PVHIV
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.cuidadosContainer}>
                {cuidadosEspeciais.diagnostico.map((cuidado, index) => (
                  <View key={index} style={[styles.cuidadoItem, { backgroundColor: '#faf5ff' }]}>
                    <View style={[styles.cuidadoBullet, { backgroundColor: '#a855f7' }]} />
                    <Text style={styles.cuidadoTexto}>{cuidado}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Pill size={20} color="#10b981" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Cuidados no Tratamento
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Manejo terapêutico específico
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.cuidadosContainer}>
                {cuidadosEspeciais.tratamento.map((cuidado, index) => (
                  <View key={index} style={[styles.cuidadoItem, { backgroundColor: '#f0fdf4' }]}>
                    <View style={[styles.cuidadoBullet, { backgroundColor: '#10b981' }]} />
                    <Text style={styles.cuidadoTexto}>{cuidado}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Activity size={20} color="#3b82f6" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Monitoramento Especial
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Acompanhamento diferenciado para PVHIV
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.cuidadosContainer}>
                {cuidadosEspeciais.monitoramento.map((cuidado, index) => (
                  <View key={index} style={[styles.cuidadoItem, { backgroundColor: '#eff6ff' }]}>
                    <View style={[styles.cuidadoBullet, { backgroundColor: '#3b82f6' }]} />
                    <Text style={styles.cuidadoTexto}>{cuidado}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Calculator size={20} color="#f97316" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Critérios Laboratoriais
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Valores de referência para tomada de decisões
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.criteriosContainer}>
                {criteriosLaboratoriais.map((criterio, index) => (
                  <View key={index} style={styles.criterioItem}>
                    <View style={styles.criterioInfo}>
                      <Text style={styles.parametroTitulo}>{criterio.parametro}</Text>
                      <Text style={styles.observacaoTexto}>{criterio.observacao}</Text>
                    </View>
                    <Badge variant="outline" style={styles.valorBadge}>
                      <Text style={styles.valorTexto}>{criterio.valor}</Text>
                    </Badge>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Alert style={styles.alert}>
            <Shield size={16} color="#10b981" />
            <AlertDescription style={styles.alertDescription}>
              <Text style={styles.boldText}>Importante:</Text> O manejo da coinfecção TB-HIV requer equipe multidisciplinar experiente.
              Casos complexos devem ser encaminhados para unidades de referência. A adesão aos dois tratamentos é
              fundamental para o sucesso terapêutico.
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
  boldText: {
    fontWeight: '600',
    color: '#1e293b',
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
  epidemiologiaContainer: {
    gap: 16,
  },
  epidemiologiaItem: {
    borderLeftWidth: 4,
    paddingLeft: 16,
    paddingVertical: 12,
  },
  epidemiologiaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  aspectoTitulo: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    flex: 1,
  },
  badge: {
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
  dadosText: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  impactoText: {
    fontSize: 14,
    fontWeight: '500',
  },
  gravidadeContainer: {
    gap: 12,
  },
  gravidadeItem: {
    borderLeftWidth: 4,
    paddingLeft: 12,
  },
  gravidadeTitulo: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
  },
  gravidadeDescricao: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
  irisContainer: {
    gap: 16,
  },
  irisItem: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 12,
  },
  irisHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  irisTitulo: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    flex: 1,
  },
  irisBadge: {
    marginLeft: 8,
    backgroundColor: '#dc2626',
  },
  irisBadgeText: {
    fontSize: 12,
    color: '#ffffff',
  },
  irisDefinicao: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  irisManifestacoes: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  irisManejo: {
    fontSize: 14,
    fontWeight: '500',
  },
  interacoesContainer: {
    gap: 16,
  },
  interacaoItem: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 16,
  },
  interacaoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  arvNome: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    flex: 1,
  },
  evidenciaBadge: {
    marginLeft: 8,
  },
  interacaoDescricao: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  separator: {
    marginVertical: 8,
  },
  manejoTexto: {
    fontSize: 14,
    fontWeight: '500',
  },
  esquemasContainer: {
    gap: 12,
  },
  esquemaItem: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 12,
  },
  esquemaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  situacaoTitulo: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    flex: 1,
  },
  duracaoBadge: {
    marginLeft: 8,
  },
  duracaoText: {
    fontSize: 12,
    color: '#475569',
  },
  esquemaBox: {
    backgroundColor: '#f1f5f9',
    padding: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  esquemaTexto: {
    fontSize: 14,
    fontFamily: 'monospace',
    color: '#1e293b',
  },
  observacoesTexto: {
    fontSize: 12,
    color: '#64748b',
  },
  cronogramaContainer: {
    gap: 16,
  },
  cronogramaItem: {
    borderLeftWidth: 4,
    paddingLeft: 16,
    paddingVertical: 12,
  },
  cronogramaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  cd4Titulo: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    flex: 1,
  },
  iniciBadge: {
    marginLeft: 8,
  },
  justificativaTexto: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  cuidadosTexto: {
    fontSize: 14,
    fontWeight: '500',
  },
  locaisContainer: {
    gap: 16,
  },
  localItem: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 16,
  },
  localHeader: {
    marginBottom: 12,
  },
  localNome: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
  },
  localPapel: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
  atividadesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  atividadeBadge: {
    marginBottom: 0,
  },
  atividadeText: {
    fontSize: 12,
    color: '#475569',
  },
  profilaxiasContainer: {
    gap: 12,
  },
  profilaxiaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
  },
  profilaxiaInfo: {
    flex: 1,
  },
  condicaoTitulo: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
  },
  indicacaoTexto: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
  },
  medicamentoInfo: {
    alignItems: 'flex-end',
    marginLeft: 12,
  },
  medicamentoNome: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
  },
  doseTexto: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
  },
  cuidadosContainer: {
    gap: 8,
  },
  cuidadoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    padding: 8,
    borderRadius: 8,
  },
  cuidadoBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 6,
  },
  cuidadoTexto: {
    fontSize: 14,
    color: '#1e293b',
    flex: 1,
  },
  criteriosContainer: {
    gap: 12,
  },
  criterioItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
  },
  criterioInfo: {
    flex: 1,
  },
  parametroTitulo: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
  },
  observacaoTexto: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
  },
  valorBadge: {
    marginLeft: 12,
  },
  valorTexto: {
    fontSize: 12,
    color: '#475569',
  },
});