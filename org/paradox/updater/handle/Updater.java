package org.paradox.updater.handle;

import org.objectweb.asm.ClassReader;
import org.objectweb.asm.tree.ClassNode;
import org.paradox.updater.model.Transform;
import org.paradox.updater.transforms.Client;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.jar.JarEntry;
import java.util.jar.JarFile;
import java.util.zip.ZipEntry;

/**
 * Created with IntelliJ IDEA.
 * User: jeronimo078
 * Date: 06-06-13
 * Time: 18:24
 * To change this template use File | Settings | File Templates.
 */
public class Updater {

    public static HashMap<String, ClassNode> classes = new HashMap<>();
    private final Transform[] transforms;

    public Updater() {
        transforms = new Transform[] {
                new Client()
        };
    }

    private void parse(File file) throws Exception {
        JarFile jar = new JarFile(file);
        Enumeration<JarEntry> en = jar.entries();
        while(en.hasMoreElements()) {
            JarEntry entry = en.nextElement();
            if(entry.getName().endsWith(".class") && !entry.getName().contains("METAE")) {
                ClassReader reader = new ClassReader(jar.getInputStream(entry));
                ClassNode node = new ClassNode();
                reader.accept(node, ClassReader.SKIP_DEBUG | ClassReader.SKIP_FRAMES);
                classes.put(node.name, node);
            }

        }
    }

    public void update() throws Exception {
        parse(new File("client.jar"));

        for(Transform trans : transforms) {
            for(ClassNode classNode : classes.values()) {
                org.paradox.updater.model.ClassNode node = new org.paradox.updater.model.ClassNode(classNode);
                if(trans.validate(node)) {
                    trans.execute(node);
                }
            }
        }
    }



}
