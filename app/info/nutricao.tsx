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
// import { Separator } from '@/components/ui/Separator';
import {
  Apple,
  Heart,
  Users,
  Clock,
  Activity,
  Calculator,
  Stethoscope,
  AlertTriangle,
  Shield,
  Utensils,
  Droplets,
  Target,
} from 'lucide-react-native';

export default function NutricaoScreen() {
  const principiosNutricionais = [
    {
      principio: "Direito Fundamental",
      descricao: "A alimentação adequada é um direito fundamental",
      importancia: "Base para políticas públicas de segurança alimentar",
      acao: "Implementação de políticas e ações governamentais",
    },
    {
      principio: "Recuperação Nutricional",
      descricao: "Acesso à alimentação apropriada é crucial para recuperação",
      importancia: "Reduz efeitos colaterais e abandono do tratamento",
      acao: "Suporte nutricional durante todo o tratamento",
    },
    {
      principio: "Prevenção do Adoecimento",
      descricao: "Condições nutricionais adequadas reduzem suscetibilidade",
      importancia: "Fortalece sistema imunológico",
      acao: "Promoção de alimentação saudável na população",
    },
    {
      principio: "Controle de Comorbidades",
      descricao: "Manejo nutricional específico para condições associadas",
      importancia: "Melhora prognóstico e reduz complicações",
      acao: "Orientação dietética especializada",
    },
  ];

  const dietaHipopurinica = {
    indicacao: "Hiperuricemia causada por etambutol e pirazinamida",
    objetivo: "Reduzir níveis de ácido úrico no sangue",
    alimentos: {
      evitar: [
        "Carnes vermelhas (especialmente vísceras)",
        "Frutos do mar (sardinha, anchova, camarão)",
        "Bebidas alcoólicas",
        "Refrigerantes e bebidas açucaradas",
        "Leguminosas em excesso (feijão, lentilha)",
        "Cogumelos",
        "Aspargos e espinafre",
        "Caldos concentrados de carne",
      ],
      preferir: [
        "Carnes brancas (frango, peru) - moderação",
        "Peixes de água doce (tilápia, pintado)",
        "Laticínios desnatados",
        "Ovos (até 3 por semana)",
        "Cereais integrais",
        "Frutas (especialmente cerejas)",
        "Vegetais verdes (exceto espinafre)",
        "Água abundante (2-3 litros/dia)",
      ],
    },
    medicamentos: [
      {
        medicamento: "Alopurinol",
        indicacao: "Hiperuricemia persistente",
        dose: "Conforme prescrição médica",
      },
      {
        medicamento: "Colchicina",
        indicacao: "Crises de gota",
        dose: "Conforme prescrição médica",
      },
    ],
  };

  const manejoTBDiabetes = {
    metasGlicemicas: [
      {
        parametro: "HbA1c",
        meta: "≤ 7,0%",
        frequencia: "A cada 3-6 meses",
        observacao: "Controle glicêmico de longo prazo",
      },
      {
        parametro: "Glicemia de Jejum",
        meta: "70-130 mg/dL",
        frequencia: "Diária (automonitoramento)",
        observacao: "Controle pré-prandial",
      },
      {
        parametro: "Glicemia Pós-Prandial",
        meta: "< 180 mg/dL",
        frequencia: "2h após refeições",
        observacao: "Controle pós-refeição",
      },
    ],
    interacoesMedicamentosas: [
      {
        medicamento: "Rifampicina",
        efeito: "Acelera metabolismo de hipoglicemiantes orais",
        consequencia: "Dificulta controle glicêmico",
        manejo: "Considerar insulinoterapia se necessário",
      },
    ],
    orientacoesDieteticas: [
      "Distribuir carboidratos ao longo do dia",
      "Preferir carboidratos complexos e integrais",
      "Incluir fibras em todas as refeições",
      "Controlar porções e horários regulares",
      "Evitar açúcares simples e refinados",
      "Monitorar glicemia antes e após refeições",
      "Manter hidratação adequada",
      "Associar atividade física conforme orientação médica",
    ],
  };

  const programasSegurancaAlimentar = [
    {
      programa: "Restaurantes Populares",
      objetivo: "Refeições a preços acessíveis",
      publico: "População em vulnerabilidade social",
      caracteristicas: ["Refeições balanceadas", "Preços subsidiados", "Localização estratégica"],
    },
    {
      programa: "Cozinhas Comunitárias",
      objetivo: "Preparo coletivo de alimentos",
      publico: "Comunidades em situação de insegurança alimentar",
      caracteristicas: ["Gestão comunitária", "Capacitação nutricional", "Fortalecimento de vínculos"],
    },
    {
      programa: "Bancos de Alimentos",
      objetivo: "Distribuição de alimentos doados",
      publico: "Famílias em insegurança alimentar",
      caracteristicas: ["Aproveitamento de excedentes", "Distribuição gratuita", "Educação nutricional"],
    },
    {
      programa: "Programa de Aquisição de Alimentos (PAA)",
      objetivo: "Compra de alimentos da agricultura familiar",
      publico: "Populações em insegurança alimentar e nutricional",
      caracteristicas: ["Fortalecimento da agricultura familiar", "Alimentos frescos", "Desenvolvimento local"],
    },
  ];

  const estrategiasPopulacaoRua = [
    {
      estrategia: "Restaurantes Comunitários",
      descricao: "Acesso facilitado a refeições regulares",
      impacto: "Melhora adesão ao tratamento",
      implementacao: "Parcerias com organizações sociais",
    },
    {
      estrategia: "Cestas Básicas",
      descricao: "Distribuição de alimentos básicos",
      impacto: "Segurança alimentar temporária",
      implementacao: "Programas governamentais e ONGs",
    },
    {
      estrategia: "Alimentação no Local do TDO",
      descricao: "Oferta de refeição durante tratamento supervisionado",
      impacto: "Incentivo direto à adesão",
      implementacao: "Integração com serviços de saúde",
    },
    {
      estrategia: "Hortas Comunitárias",
      descricao: "Cultivo coletivo de alimentos",
      impacto: "Autonomia alimentar e ocupação",
      implementacao: "Projetos de economia solidária",
    },
  ];

  const orientacoesNutricionais = {
    gerais: [
      "Aumentar consumo de proteínas para recuperação muscular",
      "Incluir alimentos ricos em vitaminas A, C e E (antioxidantes)",
      "Consumir alimentos fonte de zinco e ferro",
      "Manter hidratação adequada (2-3 litros água/dia)",
      "Fazer refeições pequenas e frequentes (5-6 por dia)",
      "Evitar jejum prolongado",
      "Incluir probióticos para saúde intestinal",
      "Reduzir alimentos processados e ultraprocessados",
    ],
    sintomaticos: [
      "Para perda de apetite: temperos naturais e apresentação atrativa",
      "Para náuseas: alimentos secos, temperatura ambiente",
      "Para diarreia: dieta BRAT (banana, arroz, maçã, torrada)",
      "Para constipação: fibras, líquidos e atividade física",
      "Para alteração do paladar: variar temperos e texturas",
      "Para boca seca: líquidos frequentes, alimentos úmidos",
    ],
  };

  const monitoramentoNutricional = [
    {
      parametro: "Peso Corporal",
      frequencia: "Semanal",
      meta: "Ganho de 0,5-1 kg/semana",
      acao: "Ajustar plano alimentar se necessário",
    },
    {
      parametro: "IMC",
      frequencia: "Mensal",
      meta: "≥ 18,5 kg/m²",
      acao: "Suplementação se IMC < 18,5",
    },
    {
      parametro: "Albumina Sérica",
      frequencia: "Mensal",
      meta: "≥ 3,5 g/dL",
      acao: "Aumentar proteínas se < 3,5",
    },
    {
      parametro: "Hemoglobina",
      frequencia: "Mensal",
      meta: "≥ 12 g/dL (mulheres), ≥ 13 g/dL (homens)",
      acao: "Suplementar ferro se necessário",
    },
  ];

  const suplementacaoNutricional = [
    {
      suplemento: "Complexo B",
      indicacao: "Prevenção de neuropatia periférica",
      dose: "Conforme prescrição médica",
      observacao: "Especialmente importante com isoniazida",
    },
    {
      suplemento: "Vitamina D",
      indicacao: "Deficiência comum em TB",
      dose: "2000-4000 UI/dia",
      observacao: "Importante para imunidade",
    },
    {
      suplemento: "Zinco",
      indicacao: "Cicatrização e imunidade",
      dose: "15-30 mg/dia",
      observacao: "Tomar longe das refeições",
    },
    {
      suplemento: "Ferro",
      indicacao: "Anemia ferropriva",
      dose: "Conforme deficiência",
      observacao: "Tomar com vitamina C",
    },
  ];

  const articulacaoIntersetorial = [
    {
      setor: "Saúde",
      papel: "Diagnóstico, tratamento e monitoramento nutricional",
      acoes: ["Avaliação nutricional", "Prescrição dietética", "Acompanhamento clínico"],
    },
    {
      setor: "Assistência Social",
      papel: "Garantia de segurança alimentar",
      acoes: ["Programas de transferência de renda", "Acesso a programas alimentares", "Apoio social"],
    },
    {
      setor: "Educação",
      papel: "Educação alimentar e nutricional",
      acoes: ["Capacitação em nutrição", "Promoção de hábitos saudáveis", "Informação à comunidade"],
    },
    {
      setor: "Agricultura",
      papel: "Produção e acesso a alimentos",
      acoes: ["Agricultura familiar", "Hortas comunitárias", "Abastecimento local"],
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Apple size={24} color="#10b981" />
          <Text style={styles.title}>Nutrição e Dieta na Tuberculose</Text>
        </View>
        <Text style={styles.subtitle}>
          Orientações nutricionais para pacientes com TB
        </Text>
      </View>

      <Tabs defaultValue="principios" style={styles.tabs}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsList}>
          <View style={styles.tabsContainer}>
            <TabsTrigger value="principios" style={styles.tabsTrigger}>
              <Text style={styles.tabsText}>Princípios</Text>
            </TabsTrigger>
            <TabsTrigger value="dietas" style={styles.tabsTrigger}>
              <Text style={styles.tabsText}>Dietas Especiais</Text>
            </TabsTrigger>
            <TabsTrigger value="programas" style={styles.tabsTrigger}>
              <Text style={styles.tabsText}>Programas</Text>
            </TabsTrigger>
            <TabsTrigger value="orientacoes" style={styles.tabsTrigger}>
              <Text style={styles.tabsText}>Orientações</Text>
            </TabsTrigger>
            <TabsTrigger value="monitoramento" style={styles.tabsTrigger}>
              <Text style={styles.tabsText}>Monitoramento</Text>
            </TabsTrigger>
          </View>
        </ScrollView>

        <TabsContent value="principios" style={styles.tabsContent}>
          <Alert style={styles.alert}>
            <Apple size={16} color="#10b981" />
            <AlertDescription style={styles.alertDescription}>
              A alimentação adequada é um direito fundamental e componente essencial no tratamento da tuberculose,
              contribuindo para a recuperação nutricional e redução do abandono terapêutico.
            </AlertDescription>
          </Alert>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Heart size={20} color="#dc2626" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Princípios da Nutrição na TB
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Fundamentos do suporte nutricional em pacientes com tuberculose
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.principiosContainer}>
                {principiosNutricionais.map((principio, index) => (
                  <View key={index} style={[styles.principioItem, { borderLeftColor: '#10b981' }]}>
                    <View style={styles.principioHeader}>
                      <Text style={styles.principioTitulo}>{principio.principio}</Text>
                      <Badge variant="outline" style={styles.badge}>
                        <Text style={styles.badgeText}>Fundamental</Text>
                      </Badge>
                    </View>
                    <Text style={styles.principioDescricao}>{principio.descricao}</Text>
                    <Text style={[styles.importanciaText, { color: '#059669' }]}>
                      <Text style={styles.boldText}>Importância:</Text> {principio.importancia}
                    </Text>
                    <Text style={[styles.acaoText, { color: '#2563eb' }]}>{principio.acao}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Shield size={20} color="#3b82f6" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Instrução Operacional Conjunta nº 1/2014
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Articulação entre serviços de saúde e assistência social
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.articulacaoContainer}>
                {articulacaoIntersetorial.map((setor, index) => (
                  <View key={index} style={styles.setorItem}>
                    <View style={styles.setorHeader}>
                      <Text style={styles.setorTitulo}>{setor.setor}</Text>
                      <Badge variant="secondary" style={styles.intersetorialBadge}>
                        <Text style={styles.intersetorialText}>Intersetorial</Text>
                      </Badge>
                    </View>
                    <Text style={styles.papelText}>{setor.papel}</Text>
                    <View style={styles.acoesContainer}>
                      {setor.acoes.map((acao, i) => (
                        <Badge key={i} variant="outline" style={styles.acaoBadge}>
                          <Text style={styles.acaoBadgeText}>{acao}</Text>
                        </Badge>
                      ))}
                    </View>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dietas" style={styles.tabsContent}>
          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Droplets size={20} color="#a855f7" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Dieta Hipopurínica
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Para hiperuricemia causada por etambutol e pirazinamida
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.dietaContainer}>
                <View style={styles.dietaInfo}>
                  <Text style={styles.dietaIndicacao}>
                    <Text style={styles.boldText}>Indicação:</Text> {dietaHipopurinica.indicacao}
                  </Text>
                  <Text style={styles.dietaObjetivo}>
                    <Text style={styles.boldText}>Objetivo:</Text> {dietaHipopurinica.objetivo}
                  </Text>
                </View>

                <View style={styles.alimentosContainer}>
                  <View style={styles.alimentosTipo}>
                    <Text style={[styles.alimentosTitulo, { color: '#dc2626' }]}>Alimentos a Evitar</Text>
                    <View style={styles.alimentosLista}>
                      {dietaHipopurinica.alimentos.evitar.map((alimento, i) => (
                        <View key={i} style={styles.alimentoItem}>
                          <View style={[styles.alimentoBullet, { backgroundColor: '#dc2626' }]} />
                          <Text style={styles.alimentoTexto}>{alimento}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                  <View style={styles.alimentosTipo}>
                    <Text style={[styles.alimentosTitulo, { color: '#059669' }]}>Alimentos Preferidos</Text>
                    <View style={styles.alimentosLista}>
                      {dietaHipopurinica.alimentos.preferir.map((alimento, i) => (
                        <View key={i} style={styles.alimentoItem}>
                          <View style={[styles.alimentoBullet, { backgroundColor: '#10b981' }]} />
                          <Text style={styles.alimentoTexto}>{alimento}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                </View>

                {/* <Separator style={styles.separator} /> */}

                <View style={styles.medicamentosContainer}>
                  <Text style={styles.medicamentosTitulo}>Medicamentos Associados</Text>
                  <View style={styles.medicamentosList}>
                    {dietaHipopurinica.medicamentos.map((med, i) => (
                      <View key={i} style={styles.medicamentoItem}>
                        <View style={styles.medicamentoInfo}>
                          <Text style={styles.medicamentoNome}>{med.medicamento}</Text>
                          <Text style={styles.medicamentoIndicacao}>{med.indicacao}</Text>
                        </View>
                        <Badge variant="outline" style={styles.doseBadge}>
                          <Text style={styles.doseText}>{med.dose}</Text>
                        </Badge>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Target size={20} color="#3b82f6" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Manejo TB + Diabetes
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Controle glicêmico e orientações dietéticas específicas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.diabetesContainer}>
                <View style={styles.metasContainer}>
                  <Text style={styles.metasTitulo}>Metas Glicêmicas</Text>
                  <View style={styles.metasList}>
                    {manejoTBDiabetes.metasGlicemicas.map((meta, i) => (
                      <View key={i} style={styles.metaItem}>
                        <View style={styles.metaHeader}>
                          <Text style={styles.metaNome}>{meta.parametro}</Text>
                          <Badge variant="outline" style={styles.metaBadge}>
                            <Text style={styles.metaValor}>{meta.meta}</Text>
                          </Badge>
                        </View>
                        <Text style={styles.metaFrequencia}>
                          <Text style={styles.boldText}>Frequência:</Text> {meta.frequencia}
                        </Text>
                        <Text style={styles.metaObservacao}>{meta.observacao}</Text>
                      </View>
                    ))}
                  </View>
                </View>

                {/* <Separator style={styles.separator} /> */}

                <View style={styles.interacaoContainer}>
                  <Text style={styles.interacaoTitulo}>Interação Medicamentosa</Text>
                  {manejoTBDiabetes.interacoesMedicamentosas.map((interacao, i) => (
                    <View key={i} style={styles.interacaoItem}>
                      <Text style={styles.interacaoMedicamento}>
                        <Text style={styles.boldText}>{interacao.medicamento}:</Text> {interacao.efeito}
                      </Text>
                      <Text style={[styles.interacaoConsequencia, { color: '#f59e0b' }]}>
                        <Text style={styles.boldText}>Consequência:</Text> {interacao.consequencia}
                      </Text>
                      <Text style={[styles.interacaoManejo, { color: '#2563eb' }]}>
                        <Text style={styles.boldText}>Manejo:</Text> {interacao.manejo}
                      </Text>
                    </View>
                  ))}
                </View>

                {/* <Separator style={styles.separator} /> */}

                <View style={styles.orientacoesContainer}>
                  <Text style={styles.orientacoesTitulo}>Orientações Dietéticas</Text>
                  <View style={styles.orientacoesList}>
                    {manejoTBDiabetes.orientacoesDieteticas.map((orientacao, i) => (
                      <View key={i} style={[styles.orientacaoItem, { backgroundColor: '#eff6ff' }]}>
                        <View style={[styles.orientacaoBullet, { backgroundColor: '#3b82f6' }]} />
                        <Text style={styles.orientacaoTexto}>{orientacao}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="programas" style={styles.tabsContent}>
          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Utensils size={20} color="#f97316" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Programas de Segurança Alimentar
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Iniciativas governamentais para garantir acesso à alimentação
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.programasContainer}>
                {programasSegurancaAlimentar.map((programa, index) => (
                  <View key={index} style={styles.programaItem}>
                    <View style={styles.programaHeader}>
                      <Text style={styles.programaNome}>{programa.programa}</Text>
                      <Badge variant="secondary" style={styles.programaBadge}>
                        <Text style={styles.programaBadgeText}>Programa Público</Text>
                      </Badge>
                    </View>
                    <Text style={styles.programaObjetivo}>
                      <Text style={styles.boldText}>Objetivo:</Text> {programa.objetivo}
                    </Text>
                    <Text style={styles.programaPublico}>
                      <Text style={styles.boldText}>Público:</Text> {programa.publico}
                    </Text>
                    <View style={styles.caracteristicasContainer}>
                      {programa.caracteristicas.map((carac, i) => (
                        <Badge key={i} variant="outline" style={styles.caracteristicaBadge}>
                          <Text style={styles.caracteristicaText}>{carac}</Text>
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
              <CardTitle style={styles.cardTitle}>
                <Users size={20} color="#dc2626" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Estratégias para População em Situação de Rua
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Intervenções específicas para aumentar adesão ao tratamento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.estrategiasContainer}>
                {estrategiasPopulacaoRua.map((estrategia, index) => (
                  <View key={index} style={[styles.estrategiaItem, { borderLeftColor: '#dc2626' }]}>
                    <View style={styles.estrategiaHeader}>
                      <Text style={styles.estrategiaTitulo}>{estrategia.estrategia}</Text>
                      <Badge variant="outline" style={styles.estrategiaBadge}>
                        <Text style={styles.estrategiaBadgeText}>Específica</Text>
                      </Badge>
                    </View>
                    <Text style={styles.estrategiaDescricao}>{estrategia.descricao}</Text>
                    <Text style={[styles.estrategiaImpacto, { color: '#059669' }]}>
                      <Text style={styles.boldText}>Impacto:</Text> {estrategia.impacto}
                    </Text>
                    <Text style={[styles.estrategiaImplementacao, { color: '#2563eb' }]}>{estrategia.implementacao}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Alert style={styles.alert}>
            <AlertTriangle size={16} color="#f59e0b" />
            <AlertDescription style={styles.alertDescription}>
              <Text style={styles.boldText}>Importante:</Text> A alimentação inadequada é um fator significativo que contribui para o
              abandono do tratamento da TB, especialmente na população em situação de rua. A identificação e
              implementação de estratégias de segurança alimentar são fundamentais.
            </AlertDescription>
          </Alert>
        </TabsContent>

        <TabsContent value="orientacoes" style={styles.tabsContent}>
          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Stethoscope size={20} color="#10b981" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Orientações Nutricionais Gerais
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Recomendações alimentares para pacientes com TB
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.orientacoesGeraisContainer}>
                <View style={styles.orientacaoSecao}>
                  <Text style={[styles.orientacaoSecaoTitulo, { color: '#059669' }]}>Orientações Gerais</Text>
                  <View style={styles.orientacaoSecaoLista}>
                    {orientacoesNutricionais.gerais.map((orientacao, i) => (
                      <View key={i} style={[styles.orientacaoGeralItem, { backgroundColor: '#f0fdf4' }]}>
                        <View style={[styles.orientacaoBullet, { backgroundColor: '#10b981' }]} />
                        <Text style={styles.orientacaoTexto}>{orientacao}</Text>
                      </View>
                    ))}
                  </View>
                </View>

                {/* <Separator style={styles.separator} /> */}

                <View style={styles.orientacaoSecao}>
                  <Text style={[styles.orientacaoSecaoTitulo, { color: '#2563eb' }]}>Manejo de Sintomas</Text>
                  <View style={styles.orientacaoSecaoLista}>
                    {orientacoesNutricionais.sintomaticos.map((orientacao, i) => (
                      <View key={i} style={[styles.orientacaoGeralItem, { backgroundColor: '#eff6ff' }]}>
                        <View style={[styles.orientacaoBullet, { backgroundColor: '#3b82f6' }]} />
                        <Text style={styles.orientacaoTexto}>{orientacao}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Activity size={20} color="#a855f7" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Suplementação Nutricional
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Suplementos recomendados durante o tratamento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.suplementosContainer}>
                {suplementacaoNutricional.map((supl, index) => (
                  <View key={index} style={styles.suplementoItem}>
                    <View style={styles.suplementoHeader}>
                      <Text style={styles.suplementoNome}>{supl.suplemento}</Text>
                      <Badge variant="outline" style={styles.suplementoBadge}>
                        <Text style={styles.suplementoDose}>{supl.dose}</Text>
                      </Badge>
                    </View>
                    <Text style={styles.suplementoIndicacao}>
                      <Text style={styles.boldText}>Indicação:</Text> {supl.indicacao}
                    </Text>
                    <Text style={[styles.suplementoObservacao, { color: '#7c3aed' }]}>{supl.observacao}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monitoramento" style={styles.tabsContent}>
          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={styles.cardTitle}>
                <Calculator size={20} color="#3b82f6" />
                <Text style={[styles.cardTitleText, { marginLeft: 8 }]}>
                  Monitoramento Nutricional
                </Text>
              </CardTitle>
              <CardDescription style={styles.cardDescription}>
                Parâmetros para acompanhamento do estado nutricional
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.monitoramentoContainer}>
                {monitoramentoNutricional.map((param, index) => (
                  <View key={index} style={styles.parametroItem}>
                    <View style={styles.parametroHeader}>
                      <Text style={styles.parametroNome}>{param.parametro}</Text>
                      <View style={styles.parametroInfo}>
                        <Badge variant="outline" style={styles.frequenciaBadge}>
                          <Text style={styles.frequenciaText}>{param.frequencia}</Text>
                        </Badge>
                        <Text style={styles.metaText}>Meta: {param.meta}</Text>
                      </View>
                    </View>
                    <Text style={[styles.parametroAcao, { color: '#2563eb' }]}>{param.acao}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardHeader>
              <CardTitle style={[styles.cardTitleText, { fontSize: 16 }]}>Sinais de Alerta Nutricional</CardTitle>
            </CardHeader>
            <CardContent>
              <View style={styles.sinaisAlertaContainer}>
                <View style={[styles.sinailAlertaItem, { borderLeftColor: '#dc2626' }]}>
                  <Text style={[styles.sinailAlertaTitulo, { color: '#dc2626' }]}>Perda de Peso Significativa</Text>
                  <Text style={styles.sinailAlertaDescricao}>&gt;5% do peso corporal em 1 mês ou &gt;10% em 6 meses</Text>
                </View>
                <View style={[styles.sinailAlertaItem, { borderLeftColor: '#f97316' }]}>
                  <Text style={[styles.sinailAlertaTitulo, { color: '#f97316' }]}>Desnutrição Grave</Text>
                  <Text style={styles.sinailAlertaDescricao}>IMC &lt;16 kg/m² ou sinais clínicos evidentes</Text>
                </View>
                <View style={[styles.sinailAlertaItem, { borderLeftColor: '#eab308' }]}>
                  <Text style={[styles.sinailAlertaTitulo, { color: '#eab308' }]}>Anemia Severa</Text>
                  <Text style={styles.sinailAlertaDescricao}>Hemoglobina &lt;8 g/dL ou sintomas limitantes</Text>
                </View>
                <View style={[styles.sinailAlertaItem, { borderLeftColor: '#a855f7' }]}>
                  <Text style={[styles.sinailAlertaTitulo, { color: '#a855f7' }]}>Hipoalbuminemia</Text>
                  <Text style={styles.sinailAlertaDescricao}>Albumina &lt;2,5 g/dL com edema ou ascite</Text>
                </View>
              </View>
            </CardContent>
          </Card>

          <Alert style={styles.alert}>
            <Clock size={16} color="#10b981" />
            <AlertDescription style={styles.alertDescription}>
              <Text style={styles.boldText}>Acompanhamento contínuo:</Text> O monitoramento nutricional deve ser realizado durante todo o
              tratamento da TB, com ajustes no plano alimentar conforme a evolução clínica e laboratorial do paciente.
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
  tabsContainer: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 4,
  },
  tabsTrigger: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#e2e8f0',
    borderRadius: 6,
    minWidth: 100,
    alignItems: 'center',
  },
  tabsText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#475569',
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
  principiosContainer: {
    gap: 16,
  },
  principioItem: {
    borderLeftWidth: 4,
    paddingLeft: 16,
    paddingVertical: 12,
  },
  principioHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  principioTitulo: {
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
  principioDescricao: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  importanciaText: {
    fontSize: 14,
    marginBottom: 8,
  },
  acaoText: {
    fontSize: 14,
    fontWeight: '500',
  },
  articulacaoContainer: {
    gap: 16,
  },
  setorItem: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 12,
  },
  setorHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  setorTitulo: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    flex: 1,
  },
  intersetorialBadge: {
    marginLeft: 8,
    backgroundColor: '#e2e8f0',
  },
  intersetorialText: {
    fontSize: 12,
    color: '#475569',
  },
  papelText: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  acoesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  acaoBadge: {
    marginBottom: 0,
  },
  acaoBadgeText: {
    fontSize: 12,
    color: '#475569',
  },
  dietaContainer: {
    gap: 16,
  },
  dietaInfo: {
    backgroundColor: '#faf5ff',
    padding: 12,
    borderRadius: 8,
  },
  dietaIndicacao: {
    fontSize: 14,
    marginBottom: 4,
  },
  dietaObjetivo: {
    fontSize: 14,
  },
  alimentosContainer: {
    gap: 16,
  },
  alimentosTipo: {
    flex: 1,
  },
  alimentosTitulo: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },
  alimentosLista: {
    gap: 8,
  },
  alimentoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  alimentoBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 6,
  },
  alimentoTexto: {
    fontSize: 14,
    color: '#1e293b',
    flex: 1,
  },
  separator: {
    marginVertical: 8,
  },
  medicamentosContainer: {
    gap: 12,
  },
  medicamentosTitulo: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
  },
  medicamentosList: {
    gap: 8,
  },
  medicamentoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
  },
  medicamentoInfo: {
    flex: 1,
  },
  medicamentoNome: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
  },
  medicamentoIndicacao: {
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
  },
  diabetesContainer: {
    gap: 24,
  },
  metasContainer: {
    gap: 12,
  },
  metasTitulo: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
  },
  metasList: {
    gap: 12,
  },
  metaItem: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 12,
  },
  metaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  metaNome: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
    flex: 1,
  },
  metaBadge: {
    marginLeft: 8,
  },
  metaValor: {
    fontSize: 12,
    color: '#475569',
  },
  metaFrequencia: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 4,
  },
  metaObservacao: {
    fontSize: 12,
    color: '#64748b',
  },
  interacaoContainer: {
    gap: 12,
  },
  interacaoTitulo: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
  },
  interacaoItem: {
    backgroundColor: '#fef3c7',
    padding: 12,
    borderRadius: 8,
    gap: 4,
  },
  interacaoMedicamento: {
    fontSize: 14,
  },
  interacaoConsequencia: {
    fontSize: 14,
  },
  interacaoManejo: {
    fontSize: 14,
    fontWeight: '500',
  },
  orientacoesContainer: {
    gap: 12,
  },
  orientacoesTitulo: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
  },
  orientacoesList: {
    gap: 8,
  },
  orientacaoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    padding: 8,
    borderRadius: 8,
  },
  orientacaoBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 6,
  },
  orientacaoTexto: {
    fontSize: 14,
    color: '#1e293b',
    flex: 1,
  },
  programasContainer: {
    gap: 16,
  },
  programaItem: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 16,
  },
  programaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  programaNome: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    flex: 1,
  },
  programaBadge: {
    marginLeft: 8,
    backgroundColor: '#e2e8f0',
  },
  programaBadgeText: {
    fontSize: 12,
    color: '#475569',
  },
  programaObjetivo: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  programaPublico: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 12,
  },
  caracteristicasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  caracteristicaBadge: {
    marginBottom: 0,
  },
  caracteristicaText: {
    fontSize: 12,
    color: '#475569',
  },
  estrategiasContainer: {
    gap: 16,
  },
  estrategiaItem: {
    borderLeftWidth: 4,
    paddingLeft: 16,
    paddingVertical: 12,
  },
  estrategiaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  estrategiaTitulo: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    flex: 1,
  },
  estrategiaBadge: {
    marginLeft: 8,
  },
  estrategiaBadgeText: {
    fontSize: 12,
    color: '#475569',
  },
  estrategiaDescricao: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  estrategiaImpacto: {
    fontSize: 14,
    marginBottom: 8,
  },
  estrategiaImplementacao: {
    fontSize: 14,
    fontWeight: '500',
  },
  orientacoesGeraisContainer: {
    gap: 24,
  },
  orientacaoSecao: {
    gap: 12,
  },
  orientacaoSecaoTitulo: {
    fontSize: 14,
    fontWeight: '600',
  },
  orientacaoSecaoLista: {
    gap: 8,
  },
  orientacaoGeralItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    padding: 8,
    borderRadius: 8,
  },
  suplementosContainer: {
    gap: 12,
  },
  suplementoItem: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 12,
  },
  suplementoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  suplementoNome: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    flex: 1,
  },
  suplementoBadge: {
    marginLeft: 8,
  },
  suplementoDose: {
    fontSize: 12,
    color: '#475569',
  },
  suplementoIndicacao: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  suplementoObservacao: {
    fontSize: 12,
  },
  monitoramentoContainer: {
    gap: 16,
  },
  parametroItem: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 16,
  },
  parametroHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  parametroNome: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    flex: 1,
  },
  parametroInfo: {
    alignItems: 'flex-end',
    marginLeft: 8,
  },
  frequenciaBadge: {
    marginBottom: 4,
  },
  frequenciaText: {
    fontSize: 12,
    color: '#475569',
  },
  metaText: {
    fontSize: 12,
    color: '#64748b',
  },
  parametroAcao: {
    fontSize: 14,
    fontWeight: '500',
  },
  sinaisAlertaContainer: {
    gap: 12,
  },
  sinailAlertaItem: {
    borderLeftWidth: 4,
    paddingLeft: 12,
  },
  sinailAlertaTitulo: {
    fontSize: 14,
    fontWeight: '500',
  },
  sinailAlertaDescricao: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
});