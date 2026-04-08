async function onResponse(context, request, response) {
    var url = request.url;
    var body = response.body.toString();

    // FILTRO GLOBAL: Se activa solo cuando el juego conecta con el servidor de combate
    if (url.includes("dl.cbt.garena.com") || url.includes("map") || url.includes("match")) {
        
        // --- 1. OPTIMIZACIÓN VISUAL DE PANTALLA (VISTA IPAD) ---
        body = body.replace(/"camera_fov":\d+\.\d+/g, '"camera_fov":1.40');
        body = body.replace(/"camera_distance":\d+\.\d+/g, '"camera_distance":2.6');

        // --- 2. MODO NOCTURNO Y RENDIMIENTO (BLACK SKY & NO GRASS) ---
        body = body.replace(/"sky_type":\d+/g, '"sky_type":0');
        body = body.replace(/"sky_color":".*?"/g, '"sky_color":"#000000"');
        body = body.replace(/"enable_grass":true/g, '"enable_grass":false');
        body = body.replace(/"enable_fog":true/g, '"enable_fog":false');

        // --- 3. VISIÓN DE ADMINISTRADOR (WALLHACK SILUETA) ---
        body = body.replace(/"show_silhouette":false/g, '"show_silhouette":true');
        body = body.replace(/"wall_penetration":false/g, '"wall_penetration":true');
        body = body.replace(/"silhouette_color":".*?"/g, '"silhouette_color":"#FF0000"');
        body = body.replace(/"render_thru_wall":false/g, '"render_thru_wall":true');

        // --- 4. RADAR DE RASTREO (MARCADO PERMANENTE) ---
        body = body.replace(/"skill_id_koda_active":false/g, '"skill_id_koda_active":true');
        body = body.replace(/"mark_duration":\d+/g, '"mark_duration":99999');
        body = body.replace(/"show_enemy_outline":false/g, '"show_enemy_outline":true');

        // --- 5. ASISTENCIA SNIPER (CHEST-LOCK) ---
        body = body.replace(/"auto_aim_target":"head"/g, '"auto_aim_target":"chest"');
        body = body.replace(/"sniper_aim_assist":\d+\.\d+/g, '"sniper_aim_assist":0.92');
        body = body.replace(/"magnet_strength":\d+\.\d+/g, '"magnet_strength":0.85');
        body = body.replace(/"damage_multiplier_chest":\d+\.\d+/g, '"damage_multiplier_chest":1.5');

        // --- 6. VISUALES DE UBICACIÓN (ANTENA & CHAMS) ---
        body = body.replace(/"head_scale":\d+/g, '"head_scale":11.5'); 
        body = body.replace(/"antenna_length":\d+/g, '"antenna_length":400');
        body = body.replace(/"character_color":".*?"/g, '"character_color":"#FFFF00"');

        // --- 7. AJUSTES ANTI-DETECCIÓN ---
        body = body.replace(/"aim_assist_level":\d+\.\d+/g, '"aim_assist_level":0.65');
        body = body.replace(/"smooth_factor":\d+\.\d+/g, '"smooth_factor":0.88');
        body = body.replace(/"head_hitbox_adjust":\d+\.\d+/g, '"head_hitbox_adjust":1.12');

        console.log(">>> FÉNIX V6: SISTEMA ADMINISTRADOR TOTAL INYECTADO <<<");
    }

    response.body = body;
    return response;
}
