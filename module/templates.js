/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
    const templatePaths = [
        "systems/shadowrun6-eden/templates/combat-tracker.html",
        "systems/shadowrun6-eden/templates/combat-trackerv9.html",
        "systems/shadowrun6-eden/templates/dialog/partRollDialogEdge.html",
        "systems/shadowrun6-eden/templates/dialog/partRollDialogOpposed.html",
        "systems/shadowrun6-eden/templates/dialog/partRollDialogSpell.html",
        "systems/shadowrun6-eden/templates/dialog/partRollDialogWeapon.html",
        "systems/shadowrun6-eden/templates/parts/npc_edit_critter.html",
        "systems/shadowrun6-eden/templates/parts/npc_edit_grunt.html",
        "systems/shadowrun6-eden/templates/parts/npc_edit_spirit.html",
        "systems/shadowrun6-eden/templates/parts/npc_full_edit_sheet.html",
        "systems/shadowrun6-eden/templates/parts/npc_usage_sheet.html",
        "systems/shadowrun6-eden/templates/parts/npc_usage_spirit.html",
        "systems/shadowrun6-eden/templates/parts/attributes.html",
        "systems/shadowrun6-eden/templates/parts/edge-token.html",
        "systems/shadowrun6-eden/templates/parts/initiatives.html",
        "systems/shadowrun6-eden/templates/parts/nuyen-token.html",
        "systems/shadowrun6-eden/templates/parts/attributes-augmented.html",
        "systems/shadowrun6-eden/templates/parts/monitors.html",
        "systems/shadowrun6-eden/templates/parts/npc-attributes.html",
        "systems/shadowrun6-eden/templates/parts/npc-attributes-ro.html",
        "systems/shadowrun6-eden/templates/parts/npc-augmentations.html",
        "systems/shadowrun6-eden/templates/parts/npc-complex-forms.html",
        "systems/shadowrun6-eden/templates/parts/npc-critterpowers.html",
        "systems/shadowrun6-eden/templates/parts/npc-gear.html",
        "systems/shadowrun6-eden/templates/parts/npc-metamagics.html",
        "systems/shadowrun6-eden/templates/parts/npc-powers.html",
        "systems/shadowrun6-eden/templates/parts/npc-skills.html",
        "systems/shadowrun6-eden/templates/parts/npc-spells.html",
        "systems/shadowrun6-eden/templates/parts/npc-echoes.html",
        "systems/shadowrun6-eden/templates/parts/npc-weapons.html",
        "systems/shadowrun6-eden/templates/parts/tab-combat.html",
        "systems/shadowrun6-eden/templates/parts/tab-magic.html",
        "systems/shadowrun6-eden/templates/parts/tab-matrix.html",
        "systems/shadowrun6-eden/templates/parts/tab-biography.html",
        "systems/shadowrun6-eden/templates/parts/tab-vehicles.html",
        "systems/shadowrun6-eden/templates/parts/pc-derived.html",
        "systems/shadowrun6-eden/templates/parts/pc-skills.html",
        "systems/shadowrun6-eden/templates/parts/pc-skillvalues.html",
        "systems/shadowrun6-eden/templates/parts/programs.html",
        "systems/shadowrun6-eden/templates/parts/section-adeptpowers.html",
        "systems/shadowrun6-eden/templates/parts/section-ammo.html",
        "systems/shadowrun6-eden/templates/parts/section-armor.html",
        "systems/shadowrun6-eden/templates/parts/section-autosoft.html",
        "systems/shadowrun6-eden/templates/parts/section-bodyware.html",
        "systems/shadowrun6-eden/templates/parts/section-complexforms.html",
        "systems/shadowrun6-eden/templates/parts/section-critterpower.html",
        "systems/shadowrun6-eden/templates/parts/section-drones.html",
        "systems/shadowrun6-eden/templates/parts/section-echoes.html",
        "systems/shadowrun6-eden/templates/parts/section-gear.html",
        "systems/shadowrun6-eden/templates/parts/section-magicbase.html",
        "systems/shadowrun6-eden/templates/parts/section-martialart.html",
        "systems/shadowrun6-eden/templates/parts/section-matrixactions.html",
        "systems/shadowrun6-eden/templates/parts/section-matrixbase.html",
        "systems/shadowrun6-eden/templates/parts/section-matrixdevices.html",
        "systems/shadowrun6-eden/templates/parts/section-metamagics.html",
        "systems/shadowrun6-eden/templates/parts/section-notes.html",
        "systems/shadowrun6-eden/templates/parts/section-rituals.html",
        "systems/shadowrun6-eden/templates/parts/section-focus.html",
        "systems/shadowrun6-eden/templates/parts/section-qualities.html",
        "systems/shadowrun6-eden/templates/parts/section-riggingbase.html",
        "systems/shadowrun6-eden/templates/parts/section-skills-action.html",
        "systems/shadowrun6-eden/templates/parts/section-skills-knowledge.html",
        "systems/shadowrun6-eden/templates/parts/section-skills-language.html",
        "systems/shadowrun6-eden/templates/parts/section-soakresist.html",
        "systems/shadowrun6-eden/templates/parts/section-spells.html",
        "systems/shadowrun6-eden/templates/parts/section-weapons.html",
        "systems/shadowrun6-eden/templates/parts/section-karma_rep.html",
        "systems/shadowrun6-eden/templates/parts/section-sins.html",
        "systems/shadowrun6-eden/templates/parts/section-contacts.html",
        "systems/shadowrun6-eden/templates/parts/section-lifestyles.html",
        "systems/shadowrun6-eden/templates/parts/section-vehicles.html",
        "systems/shadowrun6-eden/templates/parts/vehicle-accessories.html",
        "systems/shadowrun6-eden/templates/parts/vehicle-brain.html",
        "systems/shadowrun6-eden/templates/parts/vehicle-monitor.html",
        "systems/shadowrun6-eden/templates/parts/vehicle-piloting.html",
        "systems/shadowrun6-eden/templates/parts/vehicle-software.html",
        "systems/shadowrun6-eden/templates/parts/vehicle-speed.html",
        "systems/shadowrun6-eden/templates/parts/vehicle-stats.html",
        "systems/shadowrun6-eden/templates/parts/vehicle-weapons.html"
    ];
    console.log(`SR6E | Load templates`);
    return loadTemplates(templatePaths);
};