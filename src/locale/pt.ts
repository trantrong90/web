/* eslint-disable max-len */
import { TranslationFn, TranslationData } from '@zoonk/models';

const translate: TranslationFn = (key, args) => {
  const data: TranslationData = {
    about_list: 'Lista de páginas sobre como o Zoonk funciona',
    about_me: 'Sobre mim',
    add_image: 'Inserir imagem',
    admin: 'Admin',
    advanced: 'Avançado',
    after: 'Depois',
    already_have_account: 'Já tem uma conta? Entre agora',
    already_logged_in: 'Você já está logado.',
    back_to_login: 'Voltar para a página de acesso',
    before: 'Antes',
    beginner: 'Iniciante',
    by: 'por',
    cancel: 'Cancelar',
    chapter_add: 'Crie um novo capítulo',
    chapter_edit: 'Editar capítulo',
    chapter_invalid_id:
      'Você não pode criar um capítulo sem uma ID válida para a trilha de aprendizagem.',
    chapter: 'Capítulo',
    chapters: 'Capítulos',
    choose_language: 'Escolha um idioma',
    comment_leave: 'Deixe um comentário',
    comment_login_required:
      'Você precisa estar logado para deixar um comentário.',
    comments: 'Comentários',
    comments_count:
      Number(args?.comments) === 1
        ? `${args?.comments} comentário`
        : `${args?.comments} comentários`,
    confirm: 'Confirmar',
    confirmation: 'Confirmação',
    contact_us: 'Fale conosco',
    content: 'Conteúdo',
    create: 'Criar',
    created: 'criado',
    created_on: `Criado em ${args?.date}`,
    creating_account: 'Criando conta...',
    current_item: 'Item atual',
    delete_confirmation: 'Você gostaria de excluir este item?',
    delete: 'Excluir',
    deleted: 'excluído',
    deleting: 'Apagando...',
    description: 'Descrição',
    done: 'Feito!',
    dont_have_account: 'Não tem conta? Cadastre-se!',
    edit: 'Editar',
    edit_history: 'Histórico',
    edit_not_allowed: 'Você não tem permissão para editar este conteúdo.',
    edit_page: 'Editar esta página',
    edit_profile: 'Editar perfil',
    edit_topic: 'Editar tópico',
    edited_on: `Editado em ${args?.date}`,
    email: 'E-mail',
    error_action: 'Ocorreu um erro. Por favor, tente novamente.',
    examples: 'Exemplos',
    expert: 'Especialista',
    feedback: 'Feedback',
    field_required: 'Campo obrigatório',
    file_too_big: 'Este arquivo é muito grande. O tamanho máximo é 2MB.',
    forgot_password: 'Esqueceu a senha?',
    forum: 'Fórum',
    go_back: 'Voltar',
    go_home: 'Ir para a página inicial.',
    having_issues: 'Está achando complicado ou encontrando alguma dificuldade?',
    home: 'Início',
    items_empty: 'Nenhum item encontrado.',
    leaderboard: 'Ranking',
    learn_about: `Aprenda sobre ${args?.title}`,
    learningPaths: 'Trilhas de aprendizado',
    lessons: 'Lições',
    let_us_know: 'Por favor, nos avise.',
    level: 'Nível',
    like: 'Curtir',
    liked: 'Você curtiu',
    likes_count:
      Number(args?.likes) === 1
        ? `${args?.likes} curtida`
        : `${args?.likes} curtidas`,
    link: 'Link',
    load_more: 'Carregar mais',
    login: 'Entrar',
    login_required: 'Você precisa estar logado para acessar esta área.',
    logout: 'Sair',
    menu: 'menu',
    message: 'Mensagem',
    my_notes: 'Minhas anotações',
    my_studies: 'Meus estudos',
    name: 'Nome',
    need_to_be_loggedin: 'Você precisa estar logado para fazer isso.',
    notes_first:
      'Escreva a sua primeira anotação. Elas são privadas. Portanto, apenas você pode visualizá-las.',
    notes_new: 'Nova anotação',
    notes_required_fields: 'Por favor, preencha um título ou descrição.',
    notifications: 'Notificações',
    order: 'Ordem',
    page_edits: 'Alterações na página',
    page_edits_title: 'Alterações na página:',
    page_list: 'Lista de páginas',
    password: 'Senha',
    password_change: 'Alterar senha',
    password_new: 'Nova senha',
    password_old: 'Senha atual',
    path_add: 'Criar trilha de aprendizado',
    path_edit: 'Editar trilha',
    path: 'Trilha',
    paths: 'Trilhas',
    photo_update: 'Mudar foto',
    photo_uploaded: 'Foto enviada',
    photo: 'Foto',
    post_add: 'Criar postagem',
    post_edit: 'Editar postagem',
    posts: 'Postagens',
    premium: 'Premium',
    privacy_policy: 'Política de privacidade',
    pro: 'Profissional',
    profile: 'Perfil',
    questions: 'Perguntas',
    read_wikipedia: 'Ler na Wikipédia',
    real_life_examples: 'Exemplos na vida Real',
    references: 'Referências',
    replies: 'Respostas',
    report: 'Reportar',
    reports: 'Reportes',
    report_confirmation:
      'Por favor, clique no botão "confirmar" para reportar este conteúdo e o autor. Você também pode incluir um comentário abaixo explicando por que o conteúdo não deve estar no Zoonk.',
    report_issue: 'Relatar problema',
    report_progress: 'Reportando usuário...',
    report_success:
      'Obrigado por reportar esse problema. Isso ajuda a melhorar a comunidade para todos :)',
    report_tooltip: 'Reporte se esse conteúdo fere os nossos termos de uso.',
    reset_password: 'Recuperar senha',
    reset_password_sending: 'Restaurando a sua senha...',
    reset_password_sent: 'Uma nova senha foi enviada ao seu e-mail.',
    response_deleted: 'Apagado!',
    revert: 'Reverter',
    revert_confirmation: 'Tem certeza que deseja reverter as alterações?',
    revert_progress: 'Revertendo...',
    revert_success: 'Alterações revertidas! Obrigado!',
    revert_tooltip: 'Cancelar as alterações e retornar à versão anterior.',
    save: 'Salvar',
    save_changes: 'Salvar alterações',
    saved: 'Salvo!',
    saved_limit_reached:
      'Você não pode salvar mais de 20 itens no plano gratuito. Por favor, assine o plano premium para salvar mais itens.',
    saved_no_items:
      'Você não salvou nenhum item ainda. Use a opção de salvar para acompanhar os assuntos que você está estudando.',
    saving: 'Salvando...',
    search: 'Busca',
    search_ph: 'Pressione Enter para pesquisar',
    search_topic: 'Busque um assunto',
    search_topic_help:
      'Nós temos uma lista de assuntos pré-definidos. Para criar uma página, selecione um assunto da lista. Você pode procurar assuntos digitando uma palavra na caixa de busca abaixo.',
    search_topic_not_found: 'Nenhum tópico encontrado. Tente outra palavra.',
    see_all: 'Ver tudo',
    see_all_edits: 'Ver todas alterações',
    selected_item: 'Item selecionado',
    send: 'Enviar',
    sending: 'Enviando...',
    sent: 'Enviado!',
    seo_contact_desc: 'Como entrar em contato com a equipe do Zoonk.',
    seo_edits_desc:
      'Veja todo o histórico de alterações feitas no Zoonk. Saiba como reverter ou relatar problemas no Zoonk.',
    seo_examples_desc:
      'Como a teoria funciona na prática. Exemplos de como as coisas funcionam no mundo real.',
    seo_home_desc:
      'Aprenda sobre qualquer assunto online. Como aprender de graça online. Zoonk é uma rede social para estudar, uma rede social para estudantes e professores.',
    seo_home_title: 'Zoonk: A rede social da educação',
    seo_learningPaths_desc:
      'Trilhas de aprendizagem sobre qualquer assunto. Ensino guiado para aprender sobre qualquer assunto com trilhas de aprendizado colaborativas.',
    seo_login_desc: 'Como fazer login na minha conta do Zoonk.',
    seo_notes_desc:
      'Como salvar anotações sobre os assuntos que estou estudando.',
    seo_posts_desc:
      'Encontre publicações e artigos sobre qualquer assunto. Aprenda lendo artigos online de graça.',
    seo_profile_desc: `${args?.name} está ensinando e aprendendo coisas no Zoonk. Veja o que ${args?.name} está criando.`,
    seo_profile_paths_desc: `Trilhas de aprendizagem criadas por ${args?.name}. Curadoria de conteúdo de ${args?.name} no Zoonk.`,
    seo_profile_paths_title: `Trilhas de aprendizagem de ${args?.name}`,
    seo_profile_posts_desc: `Publicações feitas por ${args?.name}. Todos os artigos publicados online por ${args?.name}.`,
    seo_profile_posts_title: `Postagens de ${args?.name}`,
    seo_profile_topics_desc: `${args?.name} está escrevendo sobre muitos assuntos interessantes. Veja os assuntos criados por ${args?.name} no Zoonk.`,
    seo_profile_topics_title: `Assuntos de ${args?.name}`,
    seo_ref_desc:
      'Encontre referências sobre qualquer assunto online. Onde encontrar boas fontes online.',
    seo_reset_password_desc:
      'Como posso recuperar ou restaurar minha senha do Zoonk?',
    seo_search_desc: `Aprenda mais sobre ${args?.searchTerm} no Zoonk. Saiba como ${args?.searchTerm} funciona.`,
    seo_search_title: `Aprenda sobre ${args?.searchTerm} no Zoonk`,
    seo_settings_desc: 'Como configurar e editar o meu perfil no Zoonk.',
    seo_signup_desc:
      'Crie uma conta no Zoonk para aprender qualquer coisa de graça.',
    seo_studies_desc:
      'Como monitorar os meus estudos online usando o Zoonk. Salvar referências de assuntos para aprender depois.',
    seo_studies_title: 'Acompanhar meus estudos',
    seo_topic_desc: `Aprenda sobre ${args?.title}. Como aprender sobre ${args?.title} de graça online.`,
    seo_topic_examples_desc: `${args?.title} na prática. Exemplos de ${args?.title} na vida real. Como usar ${args?.title} no dia-a-dia.`,
    seo_topic_examples_title: `${args?.title} na prática`,
    seo_topic_paths_desc: `Trilhas de aprendizagem sobre ${args?.title}. Aprenda ${args?.title} de forma colaborativa online.`,
    seo_topic_paths_title: `Trilhas de aprendizagem sobre ${args?.title}`,
    seo_topic_posts_desc: `Encontre postagens sobre ${args?.title}. Os melhores artigos sobre ${args?.title} online.`,
    seo_topic_posts_title: `Fórum sobre ${args?.title}`,
    seo_topic_refs_desc: `Referências sobre ${args?.title}. Como encontrar fontes confiáveis sobre ${args?.title} online.`,
    seo_topic_refs_title: `Referências sobre ${args?.title}`,
    seo_topics_desc: 'Aprenda qualquer assunto de graça no Zoonk.',
    seo_topics_create_desc: 'Como criar um assunto novo no Zoonk.',
    settings: 'Configurações',
    signin_facebook: 'Entre com o Facebook',
    signin_google: 'Entre com o Google',
    signing_in: 'Conectando...',
    signup: 'Cadastre-se',
    signup_notice: 'Ao me cadastrar, você concordo com os',
    signup_notice_and: 'e a',
    social_description:
      'Zoonk é uma rede social onde você pode aprender qualquer coisa de graça online.',
    subscribe_free_desc: '20 items salvos\n20 anotações',
    subscribe_free_price: 'R$0',
    subscribe_free_title: 'Grátis',
    subscribe_premium_btn: 'Assine',
    subscribe_premium_desc:
      'Salve items ilimitados\nAnotações ilimitadas\nSem anúncios\nApoie o ensino gratuito\nCusta menos de R$0.22 por dia!',
    subscribe_premium_price: 'R$79.90',
    subscribe_premium_title: 'Premium',
    subscribe_success_desc:
      'O seu apoio é muito importante. Se tiver qualquer dúvida ou sugestão, por favor entre em contato.',
    subscribe_success_title: 'Muito obrigado! :)',
    subscription: 'Assinatura',
    terms_service: 'Termos de uso',
    text: 'Texto',
    title: 'Título',
    title_required: 'Por favor, preencha o título.',
    topic_create: 'Criar assunto',
    topic_create_desc: 'Selecione um assunto:',
    topic_selector_helper:
      'Quais assuntos você está abordando? (Ex. Física, Futebol, Geografia, etc.).',
    topics: 'Assuntos',
    updated: 'editado',
    upgrade_desc:
      'O Zoonk é gratuito e tem o código aberto porque nós acreditamos que o conhecimento deve ser acessível a todos. Ao assinar um plano premium, você nos ajuda a manter o Zoonk gratuito.',
    upgrade_premium: 'Assinar premium',
    upgrade_title: 'Apoie o ensino gratuito',
    uploading: 'Enviando...',
    url: 'URL',
    username: 'Nome de usuário',
    username_exists: 'Este nome de usuário já existe.',
    video: 'Vídeo',
    video_link: 'Link do vídeo',
    view: 'Ver',
    year: 'Ano',
  };

  return data[key] || key;
};

export default translate;
