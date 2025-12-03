import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Configurar permisos públicos automáticamente
    await setPublicPermissions(strapi);
  },
};

async function setPublicPermissions(strapi: Core.Strapi) {
  // Permisos que queremos hacer públicos
  const permissions = [
    {
      action: 'api::home-page.home-page.find',
      subject: null,
    },
    {
      action: 'api::sobre-mi.sobre-mi.find',
      subject: null,
    },
    {
      action: 'api::el-manual.el-manual.find',
      subject: null,
    },
    {
      action: 'api::product.product.find',
      subject: null,
    },
    {
      action: 'api::product.product.findOne',
      subject: null,
    },
    {
      action: 'api::product-category.product-category.find',
      subject: null,
    },
    {
      action: 'api::product-category.product-category.findOne',
      subject: null,
    },
    {
      action: 'api::product-detail.product-detail.find',
      subject: null,
    },
  ];

  try {
    // Obtener el rol público
    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({
        where: { type: 'public' },
      });

    if (!publicRole) {
      console.log('Public role not found');
      return;
    }

    // Para cada permiso, verificar si existe y crearlo/actualizarlo
    for (const permission of permissions) {
      const existingPermission = await strapi
        .query('plugin::users-permissions.permission')
        .findOne({
          where: {
            action: permission.action,
            role: publicRole.id,
          },
        });

      if (existingPermission) {
        // Actualizar permiso existente para habilitarlo
        await strapi.query('plugin::users-permissions.permission').update({
          where: { id: existingPermission.id },
          data: { enabled: true },
        });
        console.log(`✅ Permission updated: ${permission.action}`);
      } else {
        // Crear nuevo permiso
        await strapi.query('plugin::users-permissions.permission').create({
          data: {
            action: permission.action,
            role: publicRole.id,
            enabled: true,
          },
        });
        console.log(`✅ Permission created: ${permission.action}`);
      }
    }

    console.log('✅ All public permissions configured successfully');
  } catch (error) {
    console.error('Error setting public permissions:', error);
  }
}
