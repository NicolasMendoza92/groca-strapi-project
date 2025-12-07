import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentLink extends Struct.ComponentSchema {
  collectionName: 'components_component_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
  };
}

export interface HeroHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_sections';
  info: {
    displayName: 'HeroGroca';
    icon: 'house';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface MusicalCardMusicalCard extends Struct.ComponentSchema {
  collectionName: 'components_musical_card_musical_cards';
  info: {
    displayName: 'MusicalCard';
    icon: 'music';
  };
  attributes: {
    button_link: Schema.Attribute.Component<'component.link', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ParagraphIntroParagraphs extends Struct.ComponentSchema {
  collectionName: 'components_paragraph_intro_paragraphs';
  info: {
    displayName: 'IntroParagraph';
    icon: 'bulletList';
  };
  attributes: {
    content: Schema.Attribute.Text;
  };
}

export interface SectionSection extends Struct.ComponentSchema {
  collectionName: 'components_section_sections';
  info: {
    displayName: 'ImageContent';
    icon: 'apps';
  };
  attributes: {
    image: Schema.Attribute.Media<'files' | 'images'>;
    paragraphs: Schema.Attribute.Component<'paragraph.intro-paragraphs', true>;
  };
}

export interface SymbolsCardSymbols extends Struct.ComponentSchema {
  collectionName: 'components_symbols_card_symbols';
  info: {
    displayName: 'CardSymbols';
    icon: 'alien';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.link': ComponentLink;
      'hero.hero-section': HeroHeroSection;
      'musical-card.musical-card': MusicalCardMusicalCard;
      'paragraph.intro-paragraphs': ParagraphIntroParagraphs;
      'section.section': SectionSection;
      'symbols.card-symbols': SymbolsCardSymbols;
    }
  }
}
